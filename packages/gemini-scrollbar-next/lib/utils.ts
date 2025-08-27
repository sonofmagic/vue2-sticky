function getScrollbarWidth() {
  const e = document.createElement('div')

  e.style.position = 'absolute'
  e.style.top = '-9999px'
  e.style.width = '100px'
  e.style.height = '100px'
  e.style.overflow = 'scroll'
  document.body.appendChild(e)
  const sw = e.offsetWidth - e.clientWidth
  document.body.removeChild(e)
  return sw
}

function addClass(el: HTMLElement, classNames: string[]) {
  if (el.classList) {
    return classNames.forEach((cl) => {
      el.classList.add(cl)
    })
  }
  el.className += ` ${classNames.join(' ')}`
}

function removeClass(el: HTMLElement, classNames: string[]) {
  if (el.classList) {
    return classNames.forEach((cl) => {
      el.classList.remove(cl)
    })
  }
  el.className = el.className.replace(new RegExp(`(^|\\b)${classNames.join('|')}(\\b|$)`, 'gi'), ' ')
}

// function isIE() {
//   const agent = navigator.userAgent.toLowerCase()
//   // mozilla/5.0 (macintosh; intel mac os x 10_15_7) applewebkit/537.36 (khtml, like gecko) chrome/139.0.0.0 safari/537.36 edg/139.0.0.0
//   return agent.includes('msie') || agent.includes('trident') || agent.includes(' edge/')
// }

export {
  addClass,
  getScrollbarWidth,
  // isIE,
  removeClass,
}
