import type { ThemeItem } from '@types'

type MediaQueryKeys = 'desktop' | 'tablet' | 'mobile'

export type MediaQuery = ThemeItem<MediaQueryKeys>

export const mediaQuery: MediaQuery = {
  desktop: '1920px',
  mobile: '360px',
  tablet: '768px'
}
