import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { getMemberProfile } from './api'

export const useGetMemberProfileQuery = () =>
  useQuery({
    queryKey: ['member'],
    queryFn: getMemberProfile,
    enabled: Boolean(getCookie('accessToken'))
  })
