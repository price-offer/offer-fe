import type { GetPostOffersReq, GetPostOffersRes } from './types'
import { http } from '@utils/http'

export const getPostOffers = (postId: number) =>
  http.get<GetPostOffersReq, GetPostOffersRes>(`/posts/${postId}/offers`, {
    postId
  })
