import type { CommonCreation, ReviewInfo } from '@types'

export type GetReviewsReq = {
  memberId: number
  role?: string
  page: number
}
export type GetReviewsRes = ReviewInfo

export type CreateReviewReq = {
  targetMemberId: number
  postId: number
  score: number
  content: string
}
export type CreateReviewRes = CommonCreation
