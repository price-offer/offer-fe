import type { ThemeItem } from '@types'

type MediaQueryKeys = 'desktop' | 'tablet' | 'mobile'
type MediaQueryValues = '1920px' | '360px' | '768px'

export type MediaQuery = ThemeItem<MediaQueryKeys, MediaQueryValues>

export const mediaQuery: MediaQuery = {
  desktop: '1920px',
  mobile: '360px',
  tablet: '768px'
}
