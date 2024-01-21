import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostOffers, createOffer, getMyOffers } from './apis'
import type { CreateOfferReq, GetPostOffersReq, GetMyOffersReq } from './types'

export const useGetMyOffersQuery = (searchOptions: GetMyOffersReq) =>
  useQuery({
    queryKey: ['myOffers', searchOptions],
    queryFn: () => getMyOffers(searchOptions)
  })

export const useGetPostOffersQuery = (params: GetPostOffersReq) =>
  useQuery({
    queryKey: ['getPostOffers', params.postId, params.sort],
    queryFn: () => getPostOffers(params)
  })

export const useCreateOfferMutation = () =>
  useMutation({
    mutationFn: (params: CreateOfferReq) => createOffer(params)
  })
