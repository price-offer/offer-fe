import type { ModalProps, IconType } from '@offer-ui/react'

export type Score = Extract<IconType, 'smile' | 'meh' | 'sad'>

export type ScoreState = Score | null

export type CommonReviewModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  nickname: string
  productName: string
}

export type SCORE = {
  state: Score
  text: string
}[]

export type StyledReviewStateProps = {
  isFill: boolean
}
