import type {
  GetMessageRoomsReq,
  GetMessageRoomsRes,
  GetMessageReq,
  GetMessageRes,
  CreateMessageReq,
  CreateMessageRes
} from './types'
import { http } from '@utils/http'

export const getMessageRooms = (params: GetMessageRoomsReq) =>
  http.get<GetMessageRoomsReq, GetMessageRoomsRes>('/msgrooms', params)

export const getMessage = (params: GetMessageReq) =>
  http.get<GetMessageReq, GetMessageRes>(
    `/msgrooms/${params.msgRoomId}/msgs`,
    params
  )

export const createMessage = (
  messageRoomId: number,
  params: CreateMessageReq
) =>
  http.post<CreateMessageReq, CreateMessageRes>(
    `/msgrooms/${messageRoomId}/msgs`,
    params
  )

export const deleteMessageRoom = (messageRoomId: number) =>
  http.delete<null>(`/msgrooms/${messageRoomId}`)
