import type { InputProps } from '@offer-ui/react'

export type LimitedInputProps = {
  className?: string
  maxLength: number
  value: string
  onChangeValue(value: string): void
} & InputProps
