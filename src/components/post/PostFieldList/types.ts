import type { ProductCondition, TradeType } from '@types'

export type PostField = {
  label: string
  value: string
}

export type PostFieldListProps = {
  date: string
  location: string
  productCondition?: ProductCondition
  tradeType?: TradeType
  height?: number
}

export type StyledTextWrapperProps = StyledProps<PostFieldListProps, 'height'>
