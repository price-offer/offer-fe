import type { ModalProps, IconType } from '@offer-ui/react'

type Score = Extract<IconType, 'smile' | 'meh' | 'sad'>

export type ScoreState = Score | null

export type CommonReviewModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  nickname: string
  productName: string
}

export type WriteReviewModalProps = CommonReviewModalProps & {
  onConfirm(state: ReviewState): void
}

export type ReadReviewModalProps = CommonReviewModalProps & {
  score: Score
  content: string
  onConfirm(): void
}

export type SCORE = {
  state: Score
  text: string
}[]

export type ReviewState = {
  reviewScore: ScoreState
  reviewText: string
}

export type StyledReviewIconProps = {
  isFill: boolean
  isGood: boolean
}

export type StyledReviewTextProps = {
  isFill: boolean
}
