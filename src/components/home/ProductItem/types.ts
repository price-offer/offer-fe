export type ProductItemProps = {
  productItem: {
    id: number
    mainImageUrl: string
    title: string
    price: number
    tradeArea: string
    tradeStatus: {
      code: number
      name: string
    }
    createdDate: string
    modifiedDate: string
    isLiked: boolean
    likeCount: number
    isReviewed: boolean
    sellerNickName: string
  }
}
