import { useQuery } from '@tanstack/react-query'
import { getMyProfile } from './api'

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['member'],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken)
  })
