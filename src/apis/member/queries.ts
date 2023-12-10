import { useQuery } from '@tanstack/react-query'
import { getMyProfile } from './apis'

export const useMyProfileQuery = (token?: string) =>
  useQuery({
    queryKey: ['myProfile', token],
    queryFn: getMyProfile,
    enabled: !!token
  })
