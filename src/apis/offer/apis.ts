import type {
  GetPostOffersReq,
  CreateOfferReq,
  GetPostOffersRes
} from './types'
import { http } from '@utils/http'

export const getPostOffers = (postId: number) =>
  http.get<GetPostOffersReq, GetPostOffersRes>(`/posts/${postId}/offers`, {
    postId,
    page: 0
  })

export const createOffer = (params: CreateOfferReq) =>
  http.post<CreateOfferReq, CreateOfferReq>(
    `/posts/${params.postId}/offers`,
    params
  )
