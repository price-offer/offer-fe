import { useQuery } from '@tanstack/react-query'
import { getMemberProfile, getMyProfile } from './apis'
import { initialMemberProfile, initialMyProfile } from './data'

export const useGetProfileQuery = (memberId: null | number) =>
  useQuery({
    queryKey: ['profile', memberId],
    queryFn: () => {
      if (!memberId) {
        return getMyProfile()
      }

      return getMemberProfile(memberId)
    },
    initialData: memberId ? initialMemberProfile : initialMyProfile
  })

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    initialData: initialMyProfile
  })
