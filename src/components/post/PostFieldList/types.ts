import type { ProductConditionCodes, TradeTypeCodes } from '@types'

export type PostField = {
  label: string
  value: string
}

export type PostFieldListProps = {
  date: string
  location: string
  productCondition?: ProductConditionCodes
  tradeType?: TradeTypeCodes
  height?: number
}

export type StyledTextWrapperProps = StyledProps<PostFieldListProps, 'height'>
