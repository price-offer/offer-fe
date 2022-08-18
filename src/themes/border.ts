import type { ThemeItem } from '@types'

type BorderKeys = 'line' | 'height'

export type Border = ThemeItem<BorderKeys>

export const border: Border = {
  height: '8px',
  line: '1px'
}
