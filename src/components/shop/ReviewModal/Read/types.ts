import type { CommonReviewModalProps, Score } from '../types'

export type ReadReviewModalProps = CommonReviewModalProps & {
  score: Score
  content: string
  onConfirm(): void
}
