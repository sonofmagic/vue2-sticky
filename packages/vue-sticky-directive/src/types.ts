export interface StickyState {
  top: boolean
  bottom: boolean
  sticked: boolean
}

export interface StickyClassMap {
  element: string
  top: string
  bottom: string
  placeholder: string
}

export interface StickyOptions {
  enabled?: boolean
  topOffset?: number
  bottomOffset?: number
  side?: 'top' | 'bottom' | 'both'
  zIndex?: number
  onStick?: (state: StickyState) => void
  classMap?: Partial<StickyClassMap>
  containerQueryAttribute?: string
  transitionTimeout?: number
}

export interface CreateStickyDirectiveOptions {
  defaults?: StickyOptions
}

export interface StickyPluginOptions {
  id?: string
  stickyOptions?: CreateStickyDirectiveOptions
}
