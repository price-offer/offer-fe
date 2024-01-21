import type { CommonReviewModalProps, ScoreState } from '../types'

export type WriteReviewModalProps = Partial<CommonReviewModalProps> & {
  onConfirm(state: ReviewState): void
}

export type ReviewState = {
  reviewScore: ScoreState
  reviewText: string
}
