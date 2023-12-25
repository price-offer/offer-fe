import { useQuery } from '@tanstack/react-query'
import { getMemberProfile, getMyProfile } from './apis'
import { initialMemberProfile, initialMyProfile } from './data'

export type ProfileQueryResult =
  | ReturnType<typeof useGetMyProfileQuery>
  | ReturnType<typeof useGetMemberProfileQuery>

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    initialData: initialMyProfile
  })

export const useGetMemberProfileQuery = (memberId = '') =>
  useQuery({
    queryKey: ['memberProfile', memberId],
    queryFn: () => getMemberProfile(Number(memberId)),
    enabled: Boolean(memberId),
    initialData: initialMemberProfile
  })
