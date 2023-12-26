import type {
  GetPostOffersReq,
  CreateOfferReq,
  GetPostOffersRes
} from './types'
import { http } from '@utils/http'

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
