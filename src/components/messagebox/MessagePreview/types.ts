export type MessagePreviewProps = {
  id: number
  partner: {
    id: number
    nickname: string
    imageUrl: string
  }
  post: {
    title: string
    imageUrl?: string
  }
  offerPrice: number
  lastContent: string
  lastSendTime: string
  isSelected?: boolean
  notReadCnt: number
  onClick?(id: number): void
}
