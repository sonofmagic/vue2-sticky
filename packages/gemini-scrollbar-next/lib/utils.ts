let _scrollbarWidth: number

function getScrollbarWidth() {
  if (_scrollbarWidth !== undefined) {
    return _scrollbarWidth
  }
  const e = document.createElement('div')
  // 但现代浏览器有批处理优化，这种差距几乎察觉不到。
  e.style.position = 'absolute'
  e.style.top = '-9999px'
  e.style.width = '100px'
  e.style.height = '100px'
  e.style.overflow = 'scroll'
  document.body.appendChild(e)
  _scrollbarWidth = e.offsetWidth - e.clientWidth
  e.remove()
  return _scrollbarWidth
}

function addClass(el: HTMLElement, classNames: string[]) {
  el.classList.add(...classNames)
}

function removeClass(el: HTMLElement, classNames: string[]) {
  el.classList.remove(...classNames)
}

export {
  addClass,
  getScrollbarWidth,
  // isIE,
  removeClass,
}
