import type { CommonReviewModalProps } from '../types'
import type { Review } from '@types'

export type ReadReviewModalProps = Partial<CommonReviewModalProps> &
  Review & {
    onConfirm(): void
  }
