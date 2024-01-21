import type {
  CommonCreation,
  MessageRoomInfo,
  MessageInfo,
  MessageSortTypeCodes
} from '@types'

export type GetMessageRoomsReq = {
  sort: MessageSortTypeCodes
  page: number
}
export type GetMessageRoomsRes = MessageRoomInfo[]

export type CreateMessageRoomReq = {
  offerId: number
}
export type CreateMessageRoomRes = CommonCreation

export type GetMessageReq = {
  msgRoomId: number
  page: number
}
export type GetMessageRes = MessageInfo[]

export type CreateMessageReq = {
  messageRoomId: number
  content: string
}
export type CreateMessageRes = CommonCreation
