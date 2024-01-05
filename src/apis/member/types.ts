import type { MemberProfile, MyProfile } from '@types'

export type GetMyProfileRes = MyProfile

export type GetMemberProfileReq = {
  memberId: number
}
export type GetMemberProfileRes = MemberProfile

export type UpdateMyProfileReq = {
  memberId: number
  nickname: string
  profileImageUrl: string
}
export type UpdateMyProfileRes = number

export type CheckValidNicknameReq = {
  nickname: string
}
export type CheckValidNicknameRes = {
  duplicate: boolean
}
