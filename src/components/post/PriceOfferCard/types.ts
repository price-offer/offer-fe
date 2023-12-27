import type { Offerer } from '@types'

export type PriceOfferCardProps = {
  isSeller: boolean
  postId: number
}

export type Offer = Offerer & {
  date: string
  price: number
}
