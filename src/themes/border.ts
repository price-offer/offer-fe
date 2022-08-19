import type { ThemeItem } from '@types'

type BorderKeys = keyof typeof border
type BorderValues = typeof border[BorderKeys]

export type Border = ThemeItem<BorderKeys, BorderValues>

export const border = {
  height: '8px',
  line: '1px'
} as const
