export type MessagePreviewProps = {
  id: number
  userInfo: {
    id: number
    nickname: string
    profileImageUrl: string | null
  }
  productInfo: {
    price: number
    productImageUrl: string | null
  }
  latestTalk: {
    content: string
    createdDate: string
  }
  isSelected?: boolean
  onClick?(id: number): void
}
