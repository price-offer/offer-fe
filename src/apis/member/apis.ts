import type {
  GetMemberProfileRes,
  GetMemberProfileReq,
  GetMyProfileRes,
  CheckValidNicknameReq,
  CheckValidNicknameRes,
  UpdateMyProfileReq,
  UpdateMyProfileRes
} from './types'
import { http } from '@utils/http'

export const getMyProfile = () =>
  http.get<null, GetMyProfileRes>('/member/access-token/me')

export const getMemberProfile = async (
  memberId: GetMemberProfileReq['memberId']
) => http.get<null, GetMemberProfileRes>(`/member/${memberId}`)

export const updateMyProfile = async ({
  memberId,
  ...payload
}: UpdateMyProfileReq) =>
  http.put<Omit<UpdateMyProfileReq, 'memberId'>, UpdateMyProfileRes>(
    `/member/${memberId}`,
    payload
  )

export const checkValidNickname = async (payload: CheckValidNicknameReq) =>
  http.post<CheckValidNicknameReq, CheckValidNicknameRes>(
    '/nickname-duplicate',
    payload
  )
