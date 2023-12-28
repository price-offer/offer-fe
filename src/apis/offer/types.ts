import type {
  CommonCreation,
  Offers,
  OfferSummaries,
  SortOptionCodes
} from '@types'

export type GetPostOffersReq = {
  postId: number
  sort: SortOptionCodes
}
export type GetPostOffersRes = Offers

export type CreateOfferReq = {
  postId: number
  price: number
  tradeType: string
  location: string
}
export type CreateOfferRes = CommonCreation

export type GetMyOffersReq = {
  sort: string
  lastId: number
  limit: number
}
export type GetMyOffersRes = OfferSummaries
