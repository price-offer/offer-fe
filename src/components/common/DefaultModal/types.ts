import type { ReactElement, ReactNode } from 'react'
import type { StyledProps } from '@types'

export type DefaultModalProps = {
  isOpen?: boolean
  hasLogo?: boolean
  title: ReactNode
  description?: string
  hasCheckIcon?: boolean
  buttons: ReactElement[]
  onClose(): void
}

export type StyledTitleProps = StyledProps<DefaultModalProps, 'hasLogo'>
