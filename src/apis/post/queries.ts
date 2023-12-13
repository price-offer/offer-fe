import { useQuery } from '@tanstack/react-query'
import { getPostDetail } from './apis'

export const useGetPostDetailQuery = (id: number) =>
  useQuery({
    queryKey: ['getPostDetail', id],
    queryFn: () => getPostDetail(id),
    select: res => res.data
  })
