import type { ProductConditionNames, TradeTypeNames } from '@types'

export type PostField = {
  title: string
  description: string
}

export type PostFieldListProps = {
  date: string
  location: string
  productCondition?: ProductConditionNames
  tradeType?: TradeTypeNames
  height?: number
}

export type StyledTextWrapperProps = StyledProps<PostFieldListProps, 'height'>
