import type { HTMLAttributes } from 'react'

export type LimitedInputProps = {
  className?: string
  maxLength: number
  value: string
  onChangeValue(value: string): void
} & HTMLAttributes<HTMLInputElement>
