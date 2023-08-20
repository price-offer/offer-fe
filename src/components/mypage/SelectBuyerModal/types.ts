import type { ModalProps } from '@offer-ui/react'

type Buyer = {
  id: number
  avatarSrc?: string
  nickname: string
  latestMessage: string
  offerTime: string
  offerPrice: number
}

export type SelectBuyerModalProps = Omit<ModalProps, 'children'> & {
  productName: string
  buyers: Buyer[]
  handleClickReviewButton?(selectedBuyerId: number): void
}
