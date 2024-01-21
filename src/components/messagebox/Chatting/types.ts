type Message = {
  member: {
    id: number
    nickname: string
    imageUrl: string
  }
  content: string
  sendTime: string
}

export type SendProps = {
  isSectionStart?: boolean
  isSectionLast?: boolean
  time: string
  children: string
}

export type ReceiveProps = SendProps & {
  isFirstMessage?: boolean
  avatarUrl?: string
}

export type ChattingProps = {
  userId: number
  messages: Message[]
  receiverImageUrl?: string
}
