import type { MemberProfile, MyProfile } from '@types'

export type GetMyProfileRes = MyProfile

export type GetMemberProfileReq = {
  memberId: number
}
export type GetMemberProfileRes = MemberProfile

export type UpdateMemberProfileReq = {
  memberId: number
  nickname: string
  profileImageUrl: string
}
// TODO: 정확한 타입 BE 확인 필요
export type UpdateMemberProfileRes = number

export type CheckValidNickNameReq = {
  nickName: string
}
// TODO: 정확한 타입 BE 확인 필요
export type CheckValidNickNameRes = {
  [key in string]: boolean
}
