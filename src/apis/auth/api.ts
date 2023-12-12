import type { LoginRes, LoginReq } from './types'
import { http } from '@utils/http'

export const getLogin = async (params: LoginReq) =>
  http.get<LoginReq, LoginRes>('/login/kakao', params)
