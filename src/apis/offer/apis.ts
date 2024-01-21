import type {
  GetMyOffersReq,
  GetMyOffersRes,
  GetPostOffersReq,
  CreateOfferReq,
  GetPostOffersRes
} from './types'
import { http } from '@utils/http'

export const getMyOffers = (params: GetMyOffersReq) =>
  http.get<GetMyOffersReq, GetMyOffersRes>('/posts/offers', params)

export const getPostOffers = (params: GetPostOffersReq) =>
  http.get<GetPostOffersReq, GetPostOffersRes>(
    `/posts/${params.postId}/offers`,
    params
  )

export const createOffer = (params: CreateOfferReq) =>
  http.post<CreateOfferReq, CreateOfferReq>(
    `/posts/${params.postId}/offers`,
    params
  )
