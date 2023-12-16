import { useQuery } from '@tanstack/react-query'
import { getMessageList } from './apis'

export const useGetMessageList = (page?: number) =>
  useQuery({
    queryKey: ['getMessageList'],
    queryFn: () => getMessageList({ page: page || 0 })
  })
