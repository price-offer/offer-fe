import { useSuspenseQuery } from '@tanstack/react-query'
import { getMyProfile } from './apis'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useSuspenseQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile
  })
