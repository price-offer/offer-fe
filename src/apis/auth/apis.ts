import type { LoginRes, LoginReq } from './types'
import { http } from '@utils/http'

export const getLogin = (params: LoginReq) =>
  http.get<LoginReq, LoginRes>('/login/kakao', params)
