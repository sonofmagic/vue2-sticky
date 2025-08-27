import type { StickyClassMap, StickyOptions } from './types'
import Vue from 'vue'
import { defu } from './utils'

const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
]

function batchStyle(el: HTMLElement, style: Record<string, any> = {}, className: Record<string, any> = {}) {
  for (const k in style) {
    const v = style[k]
    if (v === null || v === undefined) {
      // 删除该行内样式
      el.style.removeProperty(k)
    }
    else {
      // @ts-ignore
      el.style[k] = v
    }
  }
  // console.log(el.style.display, el.style.display === '')
  // el.style = style// Object.entries(style).map(x => `${x[0]}:${x[1]};`).join('')
  // debugger
  for (const k in className) {
    if (className[k] && !el.classList.contains(k)) {
      el.classList.add(k)
    }
    else if (!className[k] && el.classList.contains(k)) {
      el.classList.remove(k)
    }
  }
}

export class Sticky {
  el: HTMLElement
  unsubscribers: Array<() => void>
  isPending: boolean
  state: Record<string, any>
  lastState: Record<string, any>
  options: Record<string, any>
  placeholderEl!: HTMLElement
  containerEl!: HTMLElement
  classMap: StickyClassMap
  containerQueryAttribute: string

  constructor(el: HTMLElement, options?: StickyOptions) {
    this.el = el
    this.unsubscribers = []
    this.isPending = false
    this.state = {
      isTopSticky: null,
      isBottomSticky: null,
      height: null,
      width: null,
      xOffset: null,
    }

    this.lastState = {
      top: null,
      bottom: null,
      sticked: false,
    }

    this.classMap = defu(options?.classMap, {
      element: 'ice-sticky-el',
      top: 'ice-sticky-top',
      bottom: 'ice-sticky-bottom',
      placeholder: 'ice-sticky-placeholder',
    })

    this.containerQueryAttribute = options?.containerQueryAttribute || 'data-sticky-container'

    const offset = {
      top: options?.topOffset ?? 0,
      bottom: options?.bottomOffset ?? 0,
    }
    const side = options?.side || 'top'
    const zIndex = options?.zIndex || '10'
    const onStick = options?.onStick || null

    this.options = {
      topOffset: Number(offset.top) || 0,
      bottomOffset: Number(offset.bottom) || 0,
      shouldTopSticky: side === 'top' || side === 'both',
      shouldBottomSticky: side === 'bottom' || side === 'both',
      zIndex,
      onStick,
    }
  }

  doBind() {
    if (this.unsubscribers.length > 0) {
      return
    }
    const { el } = this
    Vue.nextTick(() => {
      this.placeholderEl = document.createElement('div')
      this.containerEl = this.getContainerEl()
      el.parentNode?.insertBefore(this.placeholderEl, el)

      const updateFn = this.update.bind(this)
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const currentOffset = entry.contentRect.right + entry.contentRect.left
          if (this.containerEl.offsetWidth !== currentOffset) {
            updateFn()
          }
        }
      })
      resizeObserver.observe(this.containerEl)
      this.unsubscribers.push(
        () => resizeObserver.unobserve(this.containerEl),
      )
      function fn() {
        updateFn()
      }
      events.forEach(
        (event) => {
          this.unsubscribers.push(
            () => window.removeEventListener(event, fn),
          )
          this.unsubscribers.push(
            () =>
              this.containerEl.removeEventListener(event, fn),
          )
          window.addEventListener(
            event,
            fn,
            { passive: true },
          )
          this.containerEl.addEventListener(event, fn, { passive: true })
        },
      )
    })
  }

  doUnbind() {
    this.unsubscribers.forEach(fn => fn())
    this.unsubscribers = []
    this.resetElement()
  }

  update(options?: {
    style?: Record<string, any>
    timeout?: number
  }) {
    const { style, timeout } = Object.assign({}, options)

    // 校验容器DomRect
    const isExistRect
    = this.validateRect(this.getElRect())

    if (!isExistRect) {
      return
    }

    if (!this.isPending) {
      if (typeof timeout === 'number') {
        setTimeout(() => {
          this.isPending = false
          this.recomputeState()
          this.updateElements(style)
        }, timeout)
      }
      else {
        requestAnimationFrame(() => {
          this.isPending = false
          this.recomputeState()
          this.updateElements(style)
        })
      }

      this.isPending = true
    }
  }

  isTopSticky() {
    if (!this.options.shouldTopSticky) {
      return false
    }
    const fromTop = this.state.placeholderElRect.top
    const fromBottom = this.state.containerElRect.bottom

    const topBreakpoint = this.options.topOffset
    const bottomBreakpoint = this.options.bottomOffset

    return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint
  }

  isBottomSticky() {
    if (!this.options.shouldBottomSticky) {
      return false
    }
    const fromBottom
      = window.innerHeight - this.state.placeholderElRect.top - this.state.height
    const fromTop = window.innerHeight - this.state.containerElRect.top

    const topBreakpoint = this.options.topOffset
    const bottomBreakpoint = this.options.bottomOffset

    return fromBottom <= bottomBreakpoint && fromTop >= topBreakpoint
  }

  recomputeState() {
    const placeholderElRect = this.getPlaceholderElRect()
    const elRect = this.getElRect()
    this.state = Object.assign({}, this.state, {
      height: elRect.height,
      width: placeholderElRect.width,
      xOffset: placeholderElRect.left,
      placeholderElRect,
      containerElRect: this.getContainerElRect(),
    })
    this.state.isTopSticky = this.isTopSticky()
    this.state.isBottomSticky = this.isBottomSticky()
  }

  fireEvents() {
    if (
      typeof this.options.onStick === 'function'
      && (this.lastState.top !== this.state.isTopSticky
        || this.lastState.bottom !== this.state.isBottomSticky
        || this.lastState.sticked
        !== (this.state.isTopSticky || this.state.isBottomSticky))
    ) {
      this.lastState = {
        top: this.state.isTopSticky,
        bottom: this.state.isBottomSticky,
        sticked: this.state.isBottomSticky || this.state.isTopSticky,
      }
      this.options.onStick(this.lastState)
    }
  }

  updateElements(style?: Record<string, any>) {
    const placeholderStyle: Record<string, number | string> = { paddingTop: 0 }
    const elStyle = Object.assign({
      position: 'static',
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      width: 'auto',
      zIndex: this.options.zIndex,
    }, style)
    const placeholderClassName = { [this.classMap.placeholder]: true }
    const elClassName = {
      [this.classMap.element]: true,
      [this.classMap.top]: false,
      [this.classMap.bottom]: false,
    }

    if (this.state.isTopSticky) {
      elStyle.position = 'fixed'
      elStyle.top = `${this.options.topOffset}px`
      elStyle.left = `${this.state.xOffset}px`
      elStyle.width = `${this.state.width}px`
      const bottomLimit
        = this.state.containerElRect.bottom
          - this.state.height
          - this.options.bottomOffset
          - this.options.topOffset
      if (bottomLimit < 0) {
        elStyle.top = `${bottomLimit + this.options.topOffset}px`
      }
      placeholderStyle.paddingTop = `${this.state.height}px`
      elClassName[this.classMap.top] = true
    }
    else if (this.state.isBottomSticky) {
      elStyle.position = 'fixed'
      elStyle.bottom = `${this.options.bottomOffset}px`
      elStyle.left = `${this.state.xOffset}px`
      elStyle.width = `${this.state.width}px`
      const topLimit
        = window.innerHeight
          - this.state.containerElRect.top
          - this.state.height
          - this.options.bottomOffset
          - this.options.topOffset
      if (topLimit < 0) {
        elStyle.bottom = `${topLimit + this.options.bottomOffset}px`
      }
      placeholderStyle.paddingTop = `${this.state.height}px`
      elClassName[this.classMap.bottom] = true
    }
    else {
      placeholderStyle.paddingTop = 0
    }

    if (this.el) {
      batchStyle(this.el, elStyle, elClassName)
    }
    if (this.placeholderEl) {
      batchStyle(this.placeholderEl, placeholderStyle, placeholderClassName)
    }

    this.fireEvents()
  }

  resetElement() {
    ['position', 'top', 'bottom', 'left', 'width', 'zIndex'].forEach((attr) => {
      this.el.style.removeProperty(attr)
    })
    this.el.classList.remove(this.classMap.bottom, this.classMap.top)
    if (this.placeholderEl) {
      const { parentNode } = this.placeholderEl
      if (parentNode) {
        parentNode.removeChild(this.placeholderEl)
      }
    }
  }

  getContainerEl(): HTMLElement {
    let node = this.el.parentNode as HTMLElement
    while (
      node
      && node.tagName !== 'HTML'
      && node.tagName !== 'BODY'
      && node.nodeType === 1
    ) {
      if (node.hasAttribute(this.containerQueryAttribute)) {
        return node as HTMLElement
      }
      node = node.parentNode as HTMLElement
    }
    return this.el.parentNode as HTMLElement
  }

  getElRect() {
    return this.el.getBoundingClientRect()
  }

  getPlaceholderElRect() {
    return this.placeholderEl.getBoundingClientRect()
  }

  getContainerElRect() {
    return this.containerEl.getBoundingClientRect()
  }

  validateRect(elRect: DOMRect) {
    const rect = {
      height: elRect.height,
      width: elRect.width,
    }
    return Object.values(rect).every(v => v !== 0)
  }
}
