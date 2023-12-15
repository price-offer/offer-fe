import type { GetPostOfferRes } from './types'
import { http } from '@utils/http'

export const getPostOffers = (postId: number) =>
  http.get<null, GetPostOfferRes>(`/posts/${postId}/offers`)
