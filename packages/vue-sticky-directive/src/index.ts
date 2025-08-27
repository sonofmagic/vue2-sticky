import type { ObjectDirective } from 'vue'
import type {
  CreateStickyDirectiveOptions,
  StickyOptions,
  StickyPluginOptions,
  StickyState,
} from './types'
import { createStickyDirective } from './factory'
import { StickyPlugin } from './plugin'

export const vSticky: ObjectDirective<HTMLElement, StickyOptions | undefined> = createStickyDirective()

export {
  createStickyDirective,
  StickyPlugin,
}

export type {
  CreateStickyDirectiveOptions,
  StickyOptions,
  StickyPluginOptions,
  StickyState,
}
