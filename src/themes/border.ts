import type { ThemeItem } from '@types'

type BorderKeys = 'line' | 'height'
type BorderValues = '1px' | '8px'

export type Border = ThemeItem<BorderKeys, BorderValues>

export const border: Border = {
  height: '8px',
  line: '1px'
}
