import { useQuery } from '@tanstack/react-query'
import { getLogin } from './apis'

export const useLoginQuery = (kakaoCode: string) =>
  useQuery({
    queryKey: ['login'],
    queryFn: () => getLogin({ code: kakaoCode }),
    enabled: Boolean(kakaoCode)
  })
