type Message = {
  id: number
  content: string
  receiverId: number
  senderId: number
  createdDate: string
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
