import type {
  GetMessageRoomsReq,
  GetMessageRoomsRes,
  GetMessageReq,
  GetMessageRes
} from './types'
import { http } from '@utils/http'

export const getMessageRooms = (params: GetMessageRoomsReq) =>
  http.get<GetMessageRoomsReq, GetMessageRoomsRes>('/msgrooms', params)

export const getMessage = (params: GetMessageReq) =>
  http.get<GetMessageReq, GetMessageRes>(
    `/msgrooms/${params.msgRoomId}/msgs`,
    params
  )
