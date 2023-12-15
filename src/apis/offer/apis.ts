import type {
  GetPostOfferReq,
  GetPostOfferRes,
  PostOfferPriceReq
} from './types'
import { http } from '@utils/http'

export const getPostOffers = (postId: number) =>
  http.get<GetPostOfferReq, GetPostOfferRes>(`/posts/${postId}/offers`, {
    postId,
    page: 0
  })

export const postOfferPrice = (postId: number, params: PostOfferPriceReq) =>
  http.post<PostOfferPriceReq, PostOfferPriceReq>(
    `/posts/${postId}/offers`,
    params
  )
