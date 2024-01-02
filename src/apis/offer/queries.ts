import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostOffers, createOffer } from './apis'
import type { CreateOfferReq, GetPostOffersReq } from './types'

export const useGetPostOffersQuery = (params: GetPostOffersReq) =>
  useQuery({
    queryKey: ['getPostOffers', params.postId, params.sort],
    queryFn: () => getPostOffers(params)
  })

export const useCreateOfferMutation = () =>
  useMutation({
    mutationFn: (params: CreateOfferReq) => createOffer(params)
  })
