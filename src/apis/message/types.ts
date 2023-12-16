export type GetMessageListReq = {
  page: number
}

export type GetMessageListRes = {
  id: number
  partner: {
    id: number
    imageUrl: string
    nickname: string
  }
  post: {
    id: number
    title: string
  }
  offerPrice: number
  lastContent: string
  notReadCnt: number
  lastSendTime: string
}[]
