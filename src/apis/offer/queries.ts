import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostOffers, postOfferPrice } from './apis'
import type { PostOfferPriceReq } from './types'

export const useGetPostOffersQuery = (postId: number) =>
  useQuery({
    queryKey: ['getPostOffers', postId],
    queryFn: () => getPostOffers(postId)
  })

export const usePostOfferPriceMutation = () =>
  useMutation({
    mutationFn: ({
      postId,
      ...params
    }: PostOfferPriceReq & { postId: number }) => postOfferPrice(postId, params)
  })
