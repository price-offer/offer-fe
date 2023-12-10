import type { GetMyProfileRes } from './types'
import { http } from '@utils/http'

export const getMyProfile = async () =>
  http.get<null, GetMyProfileRes>('/api/member/access-token/me')
