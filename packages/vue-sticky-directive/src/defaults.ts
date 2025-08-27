import type { StickyOptions } from './types'

export function getDefaultOption(): StickyOptions {
  return {
    bottomOffset: 0,
    enabled: true,
    side: 'top',
    topOffset: 0,
    zIndex: 10,
  }
}
