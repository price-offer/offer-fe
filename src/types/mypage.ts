import type { KeyOf } from './app'

export type TradeType = KeyOf<typeof tradeType>

export const tradeType = {
  sell: '판매',
  buy: '구매'
} as const
