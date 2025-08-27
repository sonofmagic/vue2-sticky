import type { Sticky } from './Sticky'

export const weakMap = new WeakMap<HTMLElement, Sticky>()

export function getStickyInstance(el: HTMLElement) {
  return weakMap.get(el)
}

export function setStickyInstance(el: HTMLElement, sticky: Sticky) {
  weakMap.set(el, sticky)
}
