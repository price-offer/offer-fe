import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostOffers, createOffer } from './apis'
import type { CreateOfferReq } from './types'

export const useGetPostOffersQuery = (postId: number) =>
  useQuery({
    queryKey: ['getPostOffers', postId],
    queryFn: () => getPostOffers(postId)
  })

export const useCreateOfferMutation = () =>
  useMutation({
    mutationFn: (params: CreateOfferReq) => createOffer(params)
  })
