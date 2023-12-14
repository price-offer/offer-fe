import type { MyProfile } from '@types'

export type GetMyProfileRes = MyProfile

export type GetMemberProfileReq = {
  memberId: string
}
export type GetMemberProfileRes = Omit<MyProfile, 'likeProductCount'>
