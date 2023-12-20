import { useQuery } from '@tanstack/react-query'
import { getMyProfile } from './apis'
import { initialMyProfile } from './data'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    initialData: initialMyProfile
  })
