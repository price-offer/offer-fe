import type {
  GetReviewsReq,
  GetReviewsRes,
  CreateReviewReq,
  CreateReviewRes
} from './types'
import { http } from '@utils/http'

export const getReviews = (params: GetReviewsReq) =>
  http.get<GetReviewsReq, GetReviewsRes>('/reviews', params)

export const createReviews = (payload: CreateReviewReq) =>
  http.post<CreateReviewReq, CreateReviewRes>('/reviews', payload)
