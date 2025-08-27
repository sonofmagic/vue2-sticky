// /* eslint-disable ts/no-non-null-asserted-optional-chain */
// import type { Ref } from 'vue'
// import type { VueInstance } from './shared'
// import { getCurrentInstance, onMounted, onUnmounted, watch } from 'vue'
// import StickyHeader from '../directives/sticky-header'
// import { checkElTable, convertToPx } from '../utils/index'

// export function useElTableSticky(target: Ref<VueInstance>) {
//   const factory = new StickyHeader({
//     offsetBottom: 0,
//     offsetTop: 0,
//   })

//   const vm = getCurrentInstance()

//   const stop = watch(
//     () => target.value,
//     (ele) => {

//     },
//   )

//   onMounted(() => {
//     checkElTable({ name: 'useElTableSticky' }, vm?.proxy.$vnode!)
//     vm?.proxy.$el.dataset[this.#target.replace(/^\S/, s => s.toLowerCase())] = ''

//     factory.initScroller(el, binding, vnode)
//     factory.stackStickyColumns(el, binding, vnode)
//   })

//   // onUpdated(() => {
//   //   update()
//   // })

//   onUnmounted(() => {

//   })

//   // return {
//   //   inserted: (el, binding, vnode) => {
//   //     checkElTable(binding, vnode)
//   //     // set data-sticky-* attribute for el-table
//   //     el.dataset[this.#target.replace(/^\S/, s => s.toLowerCase())] = ''
//   //     this.#initScroller(el, binding, vnode)
//   //     this.#stackStickyColumns(el, binding, vnode)
//   //   },
//   //   update: (el, binding, vnode) => {
//   //     this.#stackStickyColumns(el, binding, vnode, true)
//   //   },
//   //   unbind: (el) => {
//   //     if (el.scroller) {
//   //       el.scroller.scrollbar?.destroy()
//   //       el.scroller = null
//   //     }
//   //   },
//   // }
//   function stopWatch() {
//     stop()
//   }
// }
