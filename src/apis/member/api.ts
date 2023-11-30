import type { MemberProfileRes } from './types'
import { http } from '@utils/http'

export const getMemberProfile = async () =>
  http.get<unknown, MemberProfileRes>('/api/member/access-token/me')
