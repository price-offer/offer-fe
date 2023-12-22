import type { TradeTypeCodes } from '@types'

export type ProductBubbleProps = {
  id: number
  title: string
  price: number
  offerPrice: number
  tradeType: TradeTypeCodes
  productImageUrl: string
  onClick?(productId: number): void
}
