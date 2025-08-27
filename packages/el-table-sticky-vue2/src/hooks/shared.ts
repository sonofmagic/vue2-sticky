import type { ComponentPublicInstance, ComputedRef, Ref, ShallowRef, WritableComputedRef } from 'vue'
import { getCurrentInstance, nextTick, onMounted, unref } from 'vue'

export type MaybeRefOrGetter<T = any> = MaybeRef<T> | ComputedRef<T> | (() => T)

export type MaybeRef<T = any>
  = | T
    | Ref<T>
    | ShallowRef<T>
    | WritableComputedRef<T>
// eslint-disable-next-line ts/no-unsafe-function-type
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}
export function toValue<T>(source: MaybeRefOrGetter<T>): T {
  return isFunction(source) ? source() : unref(source) as T
}

export type VueInstance = ComponentPublicInstance
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return ((plain as VueInstance)?.$el ?? plain) as UnRefElementReturn<T>
}

export function getLifeCycleTarget(target?: any) {
  return target || getCurrentInstance()
}

export type Fn = () => void
export function tryOnMounted(fn: Fn, sync = true, target?: any) {
  const instance = getLifeCycleTarget(target)
  if (instance) {
    onMounted(fn, target)
  }
  else if (sync) {
    fn()
  }
  else {
    nextTick(fn)
  }
}
