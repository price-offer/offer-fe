import type {
  GetMemberProfileRes,
  GetMemberProfileReq,
  GetMyProfileRes
} from './types'
import { http } from '@utils/http'

export const getMyProfile = () =>
  http.get<null, GetMyProfileRes>('/member/access-token/me')

export const getMemberProfile = async (
  memberId: GetMemberProfileReq['memberId']
) => http.get<null, GetMemberProfileRes>(`/member/${memberId}`)
