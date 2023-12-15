import type { TradeTypeCodes } from '@types'

export type PriceOfferCardProps = {
  offerList: Offer[]
  likeCount: number
  isLike: boolean
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
