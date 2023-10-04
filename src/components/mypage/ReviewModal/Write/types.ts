import type { CommonReviewModalProps, ScoreState } from '../types'

export type WriteReviewModalProps = CommonReviewModalProps & {
  onConfirm(state: ReviewState): void
}

export type ReviewState = {
  reviewScore: ScoreState
  reviewText: string
}
