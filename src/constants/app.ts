import type { KeyOf, ValueOf } from '@types'

export type ProductStatusKeys = KeyOf<typeof PRODUCT_STATUS>
export type ProductStatusValues = ValueOf<typeof PRODUCT_STATUS>

export const PRODUCT_STATUS = {
  sell: '판매중',
  soldOut: '거래 완료'
} as const
