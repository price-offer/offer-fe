import type { TradeTypeCodes } from '@types'

export type PriceOfferCardProps = {
  postId: number
}

export type Offer = {
  id: number
  nickname: string
  level: number
  location: string
  date: string
  price: number
  profileImageUrl: string
  tradeType: TradeTypeCodes
}
