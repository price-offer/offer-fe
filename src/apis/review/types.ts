import type { CommonCreation, ReviewCount, ReviewInfo } from '@types'

export type GetReviewsReq = {
  memberId: number
  role?: string
  lastId: number
  limit: number
}
export type GetReviewsRes = ReviewInfo

export type CreateReviewReq = {
  targetMemberId: number
  postId: number
  score: number
  content: string
}
export type CreateReviewRes = CommonCreation

export type GetReviewsCountsReq = {
  memberId: number
}
export type GetReviewsCountsRes = ReviewCount
