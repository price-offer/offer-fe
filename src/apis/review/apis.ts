import type {
  GetReviewsReq,
  GetReviewsRes,
  CreateReviewReq,
  CreateReviewRes,
  GetReviewsCountsReq,
  GetReviewsCountsRes
} from './types'
import { http } from '@utils/http'

export const getReviews = (params: GetReviewsReq) =>
  http.get<GetReviewsReq, GetReviewsRes>('/reviews', params)

export const createReviews = (payload: CreateReviewReq) =>
  http.post<CreateReviewReq, CreateReviewRes>('/reviews', payload)

export const getReviewsCounts = (params: GetReviewsCountsReq) =>
  http.get<GetReviewsCountsReq, GetReviewsCountsRes>(
    `/reviews/counts?memberId=${params.memberId}`
  )
