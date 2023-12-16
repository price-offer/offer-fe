export const TRANSACTION_TYPE = {
  all: '직거래/택배거래',
  direct: '직거래',
  parcel: '택배거래'
} as const

export type PriceOfferCardProps = {
  offerList: Offer[]
  likeCount: number
  isLike: boolean
}
export type Offer = {
  id: number
  name: string
  level: number
  tradeArea: string
  date: string
  offerPrice: number
  profileUrl: string
  tradeMethod: keyof typeof TRANSACTION_TYPE
}
