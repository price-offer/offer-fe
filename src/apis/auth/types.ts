import type { OauthLoginUrl } from '@types'

export type GetTokenReq = {
  memberId: number
}
// TODO: 정확한 타입 BE 확인 필요
export type GetTokenRes = {
  [key in string]: string
}

export type LoginReq = {
  code: string
}
export type LoginRes = {
  id: number
  nickname: string
  profileImageUrl: string
  accessToken: string
  newMember: boolean
}

// TODO: 정확한 타입 BE 확인 필요
export type DeleteMemberReq = null

export type GetKaKaoLoginUrlRes = OauthLoginUrl
