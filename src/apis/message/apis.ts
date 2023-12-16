import type { GetMessageListReq, GetMessageListRes } from './types'
import { http } from '@utils/http'

export const getMessageList = (params: GetMessageListReq) =>
  http.get<GetMessageListReq, GetMessageListRes>('/msgrooms', params)
