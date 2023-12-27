import type { Offerer } from '@types'

export type PriceOfferCardProps = {
  offerList: Offer[]
  likeCount: number
  isLike: boolean
}

export type Offer = Offerer & {
  date: string
  price: number
}
