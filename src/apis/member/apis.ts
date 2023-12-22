import type { GetMyProfileRes } from './types'
import { http } from '@utils/http'

export const getMyProfile = () =>
  http.get<null, GetMyProfileRes>('/member/access-token/me')
