import type { ThemeItem } from '@types'

type ZIndexKeys = 'modal' | 'selectbox'
type ZIndexValues = 200 | 300

export type ZIndex = ThemeItem<ZIndexKeys, ZIndexValues>

export const zIndex: ZIndex = {
  modal: 300,
  selectbox: 200
}
