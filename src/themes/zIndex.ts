import type { ThemeItem } from '@types'

type ZIndexKeys = 'modal' | 'selectbox'

export type ZIndex = ThemeItem<ZIndexKeys, number>

export const zIndex: ZIndex = {
  modal: 200,
  selectbox: 100
}
