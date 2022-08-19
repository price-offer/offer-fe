import type { ThemeItem } from '@types'

type ZIndexKeys = keyof typeof zIndex
type ZIndexValues = typeof zIndex[ZIndexKeys]

export type ZIndex = ThemeItem<ZIndexKeys, ZIndexValues>

export const zIndex = {
  modal: 300,
  selectbox: 200
} as const
