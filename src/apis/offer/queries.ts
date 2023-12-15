import { useQuery } from '@tanstack/react-query'
import { getPostOffers } from './apis'

export const useGetPostOffersQuery = (postId: number) =>
  useQuery({
    queryKey: ['getPostOffers', postId],
    queryFn: () => getPostOffers(postId)
  })
