import type { StyledProps } from '@types'

export type ProductFieldProps = {
  label: string
  value: string
  height?: number
}

export type StyledTextWrapperProps = StyledProps<ProductFieldProps, 'height'>
