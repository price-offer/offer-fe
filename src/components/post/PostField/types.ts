import type { StyledProps } from '@types'

export type PostFieldProps = {
  label: string
  value: string
  height?: number
}

export type StyledTextWrapperProps = StyledProps<PostFieldProps, 'height'>
