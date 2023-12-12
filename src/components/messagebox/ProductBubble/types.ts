import type { TradeMethodCodes } from '@types'

export type ProductBubbleProps = {
  id: number
  title: string
  price: number
  offerPrice: number
  tradeType: TradeMethodCodes
  productImageUrl: string
  onClick?(productId: number): void
}
