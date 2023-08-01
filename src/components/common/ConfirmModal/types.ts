import type { ReactNode } from 'react'
import type { StyledProps } from '@types'

export type ConfirmModalProps = {
  isOpen?: boolean
  hasLogo?: boolean
  title: ReactNode
  description?: string
  primaryButtonText?: ReactNode
  hasCheckIcon?: boolean
  ghostButtonText?: ReactNode
  children?: ReactNode
  onClose(): void
}

export type StyledTitleProps = StyledProps<ConfirmModalProps, 'hasLogo'>
