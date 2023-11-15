import { useQuery } from '@tanstack/react-query'
import { getLogin } from './api'

export const useLoginQuery = (code: string) =>
  useQuery({
    queryKey: ['login'],
    queryFn: () => getLogin({ code }),
    enabled: Boolean(code)
  })
