import { createLocalVue, shallowMount } from '@vue/test-utils'
import { vSticky } from '@/index'
import basic from './fixtures/basic.vue'

describe('sticky-vue2', () => {
  beforeEach(() => {
    vi.resetModules()
    globalThis.ResizeObserver = class ResizeObserver {
      observe() {
        // do nothing
      }

      unobserve() {
        // do nothing
      }

      disconnect() {
        // do nothing
      }
    }
  })
  it.skip('should work with import on demand', async () => {
    const localVue = createLocalVue()
    localVue.directive('sticky', vSticky)
    const wrapper = shallowMount(basic, {
      localVue,
    })
    await wrapper.vm.$nextTick()
    const ResizeEvent = new Event('resize')
    window.dispatchEvent(ResizeEvent)
    // 获取 container 元素并修改其宽度
    const container = wrapper.find('#container').element as HTMLElement

    // 模拟异步加载
    await new Promise(resolve => setTimeout(resolve, 100))
    container.dispatchEvent(ResizeEvent)
    await wrapper.vm.$nextTick() // 等待异步更新

    expect(wrapper.find('#sticky').classes()).toContain('ice-sticky-el')
    const style = window.getComputedStyle(wrapper.find('#sticky').element)
    expect(style.position).toBe('fixed')
  })
})
