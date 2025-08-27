import type { PluginObject } from 'vue'
import type { StickyPluginOptions } from './types'
import { createStickyDirective } from './factory'
import { defu } from './utils'

export const StickyPlugin: PluginObject<StickyPluginOptions> = {
  install(app, options) {
    const { id, stickyOptions } = defu<StickyPluginOptions, StickyPluginOptions[]>(
      options,
      { id: 'sticky' },
    )
    const vSticky = createStickyDirective(stickyOptions)
    if (id) {
      app.directive(id, vSticky)
    }
  },
}
