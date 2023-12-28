import type { GetReviewsReq, GetReviewsRes } from './types'
import { http } from '@utils/http'

export const getReviews = (params: GetReviewsReq) =>
  http.get<GetReviewsReq, GetReviewsRes>('/reviews', params)
