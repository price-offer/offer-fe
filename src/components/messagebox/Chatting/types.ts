type Message = {
  id: number
  content: string
  receiverId: number
  senderId: number
  createdDate: string
}

export type ChattingProps = {
  userId: number
  messages: Message[]
}
