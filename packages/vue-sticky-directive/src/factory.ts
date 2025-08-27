import type { ObjectDirective, VNode } from 'vue'
import type { CreateStickyDirectiveOptions, StickyOptions } from './types'
import Vue from 'vue'
import { getStickyInstance, setStickyInstance, weakMap } from './cache'
import { getDefaultOption } from './defaults'
import { Sticky } from './Sticky'
import { defu } from './utils'

export function findKeepAlive(vnode: VNode) {
  let compVnode = null

  if (vnode.componentInstance) {
    // 情况 1：指令绑定在组件标签上
    compVnode = vnode
  }
  else if (vnode.context && vnode.context.$vnode) {
    // 情况 2：指令绑定在组件的 DOM 元素上
    compVnode = vnode.context.$vnode
  }
  const isInKeepAlive = !!(compVnode && compVnode.data && compVnode.data.keepAlive)
  return {
    isInKeepAlive,
    compVnode,
  }
}
// hook:deactivated
// hook:activated
const keepAliveActivatedEvent = 'hook:activated'

const keepAliveDeactivatedEvent = 'hook:deactivated'

export function createStickyDirective(options?: CreateStickyDirectiveOptions): ObjectDirective<HTMLElement, StickyOptions | undefined> {
  const { defaults } = defu<CreateStickyDirectiveOptions, CreateStickyDirectiveOptions[]>(options, {
    defaults: getDefaultOption(),
  })
  function mergeOptions(opts?: StickyOptions) {
    return defu<StickyOptions, (StickyOptions | undefined)[]>(opts, defaults)
  }
  let componentInstance: Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue> | undefined
  return {
    inserted(el, bind, vnode) {
      // console.log('inserted', vnode)
      const opts = mergeOptions(bind.value)
      let sticky = new Sticky(el, opts)
      sticky.doBind()
      setStickyInstance(el, sticky)

      const { compVnode, isInKeepAlive } = findKeepAlive(vnode)
      if (isInKeepAlive && compVnode) {
        // 监听 keep-alive 激活和停用
        if (compVnode.componentInstance) {
          // https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html
          compVnode.componentInstance.$on(keepAliveActivatedEvent, () => {
            Vue.nextTick(() => {
              sticky.doUnbind()
              sticky = new Sticky(el, opts)
              setStickyInstance(el, sticky)
              sticky.doBind()
              sticky.update({
                timeout: opts.transitionTimeout,
              })
            })
          })
          compVnode.componentInstance.$on(keepAliveDeactivatedEvent, () => {

          })
          componentInstance = compVnode.componentInstance
        }
      }
    },
    unbind(el, _, _vnode) {
      const sticky = getStickyInstance(el)
      if (sticky) {
        sticky.doUnbind()
        weakMap.delete(el)
      }
      if (componentInstance) {
        componentInstance.$off(keepAliveActivatedEvent)
        componentInstance.$off(keepAliveDeactivatedEvent)
        componentInstance = undefined
      }
    },
    componentUpdated(el, bind) {
      // console.log('componentUpdated')
      let sticky = getStickyInstance(el)
      const options = mergeOptions(bind.value)
      if (options.enabled) {
        if (!sticky) {
          sticky = new Sticky(el, options)
          setStickyInstance(el, sticky)
        }
        sticky.doBind()
      }
      else {
        if (sticky) {
          sticky.doUnbind()
        }
      }
    },
    // bind(el, _, vnode) {
    //   console.log('bind', vnode)
    // },
    // update() {
    //   console.log('update')
    // },
  }
}
