import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { getMemberProfile, getMyProfile } from './apis'
import { initialMyProfile } from './data'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    initialData: initialMyProfile
  })

export const useGetMemberProfileQuery = (memberId = '') =>
  useSuspenseQuery({
    queryKey: ['memberProfile', memberId],
    queryFn: () => getMemberProfile(Number(memberId))
  })
