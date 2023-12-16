import type {
  GetMessageListReq,
  GetMessageListRes,
  GetMessageRoomReq,
  GetMessageRoomRes
} from './types'
import { http } from '@utils/http'

export const getMessageList = (params: GetMessageListReq) =>
  http.get<GetMessageListReq, GetMessageListRes>('/msgrooms', params)

export const getMessageRoom = (params: GetMessageRoomReq) =>
  http.get<GetMessageRoomReq, GetMessageRoomRes>(
    `/msgrooms/${params.msgRoomId}/msgs`,
    params
  )
