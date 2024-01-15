import type { CreateMessageRoomReq, CreateMessageRoomRes } from './types'
import { http } from '@utils/http'

export const createMessageRoom = (params: CreateMessageRoomReq) =>
  http.post<CreateMessageRoomReq, CreateMessageRoomRes>('/msgrooms', params)
