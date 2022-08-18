import type { ThemeItem } from '@types'

type RadiusKeys = 'round04' | 'round08' | 'round12' | 'round16'
type RadiusValues = '4px' | '8px' | '12px' | '16px'

export type Radius = ThemeItem<RadiusKeys, RadiusValues>

export const radius: Radius = {
  round04: '4px',
  round08: '8px',
  round12: '12px',
  round16: '16px'
}
