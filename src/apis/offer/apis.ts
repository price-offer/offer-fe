import type { GetPostOfferReq, GetPostOfferRes } from './types'
import { http } from '@utils/http'

export const getPostOffers = (postId: number) =>
  http.get<GetPostOfferReq, GetPostOfferRes>(`/posts/${postId}/offers`, {
    postId,
    page: 0
  })
