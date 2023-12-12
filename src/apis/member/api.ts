import type { MyProfileRes } from './types'
import { http } from '@utils/http'

export const getMyProfile = async () =>
  http.get<null, MyProfileRes>('/member/access-token/me')
