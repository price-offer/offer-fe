import type { Theme } from '@emotion/react'
import type { ModalProps, IconType } from '@offer-ui/react'

export type ReviewModalProps = Pick<
  ModalProps,
  'isOpen' | 'onClose' | 'children'
> & {
  nickName: string
  productName: string
}

type Evaluate = Extract<IconType, 'smile' | 'meh' | 'sad'>

export type EvaluateData = {
  state: Evaluate
  text: string
}[]

export type EvaluateState = Evaluate | null

export type StyledReviewIconProps = {
  isFill: boolean
  isGood: boolean
}

export type StyledReviewTextProps = {
  isFill: boolean
}

export type StyledReviewIconTextProps = {
  isFill: boolean
  theme: Theme
}
