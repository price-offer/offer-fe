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

export type GetMessageRoomReq = {
  msgRoomId: number | null
  page: number
}

export type GetMessageRoomRes = {
  content: string
  member: {
    id: number
    imageUrl: string
    nickname: string
  }
  sendTime: string
}[]
