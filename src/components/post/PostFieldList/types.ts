export type PostField = {
  label: string
  value: string
}

export type PostFieldListProps = {
  date: string
  location: string
  productCondition: string
  tradeType: string
  height?: number
}

export type StyledTextWrapperProps = StyledProps<PostFieldListProps, 'height'>
