import { useSuspenseQuery } from '@tanstack/react-query'
import { getMemberProfile, getMyProfile } from './apis'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useSuspenseQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile
  })

export const useGetMemberProfileQuery = (memberId = '1') =>
  useSuspenseQuery({
    queryKey: ['memberProfile', memberId],
    queryFn: () => getMemberProfile(memberId)
  })
