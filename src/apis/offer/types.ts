import type { TradeTypeCodes } from '@types'

export type GetPostOfferRes = {
  totalSize: number
  postId: number
  offers: {
    id: number
    offerer: {
      id: number
      nickname: string
      location: string
      level: string
      tradeType: TradeTypeCodes
      profileImageUrl: string
    }
    price: number
    createdAt: string
  }[]
  offerCountOfCurrentMember: number
  maximumOfferCount: number
}
