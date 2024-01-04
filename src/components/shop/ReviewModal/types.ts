import type { ModalProps } from '@offer-ui/react'

export type Score = 0 | 1 | 2

export type ScoreState = Score | null

export type CommonReviewModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  nickname: string
  productName: string
}

export type ScoreOptions = {
  state: Score
  text: string
}[]

export type StyledReviewStateProps = {
  isFill: boolean
}
