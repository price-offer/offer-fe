import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostOffers, postOfferPrice } from './apis'
import type { CreateOfferReq } from './types'

export const useGetPostOffersQuery = (postId: number) =>
  useQuery({
    queryKey: ['getPostOffers', postId],
    queryFn: () => getPostOffers(postId)
  })

export const usePostOfferPriceMutation = () =>
  useMutation({
    mutationFn: (params: CreateOfferReq) => postOfferPrice(params)
  })
