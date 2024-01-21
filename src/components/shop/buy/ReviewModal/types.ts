import type { ModalProps } from '@offer-ui/react'
import type { ScoreNames } from '@types'

export type ScoreState = ScoreNames | null

export type CommonReviewModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  nickname: string
  productName: string
}

export type ScoreOptions = {
  state: ScoreNames
  text: string
}[]

export type StyledReviewStateProps = {
  isFill: boolean
}
