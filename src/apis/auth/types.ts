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
