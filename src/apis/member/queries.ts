import { useQuery } from '@tanstack/react-query'
import { getMyProfile } from './apis'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    select: res => res.data
  })
