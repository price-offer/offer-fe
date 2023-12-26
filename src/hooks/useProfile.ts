import { getCookie } from 'cookies-next'
import { useGetMyProfileQuery, useGetMemberProfileQuery } from '@apis'
import type { GetMyProfileRes, GetMemberProfileRes } from '@apis'
import { env } from '@constants'

type UseProfileReturns = { profile: GetMyProfileRes | GetMemberProfileRes }

export const useProfile = (memberId = ''): UseProfileReturns => {
  const token = getCookie(env.AUTH_TOKEN_KEY)

  const myProfile = useGetMyProfileQuery(token)
  const memberProfile = useGetMemberProfileQuery(memberId)

  const isMyProfile = myProfile && memberId === String(myProfile.data?.id)
  const profile = isMyProfile ? myProfile.data : memberProfile.data

  return { profile }
}
