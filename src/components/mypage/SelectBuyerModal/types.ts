type Buyer = {
  id: number
  avatarSrc?: string
  nickname: string
  latestMessage: string
  offerTime: string
  offerPrice: number
}

export type SelectBuyerModalProps = {
  productName: string
  buyers: Buyer[]
  handleClickReviewButton?(selectedBuyer: Buyer): void
}
