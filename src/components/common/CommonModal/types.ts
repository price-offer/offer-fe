import type { ReactElement } from 'react'
import type { StyledProps } from '@types'

export type CommonModalProps = {
  isOpen?: boolean
  hasLogo?: boolean
  title: string
  description?: string
  hasCheckIcon?: boolean
  buttons: ReactElement[]
  onClose(): void
}

export type StyledTitleProps = StyledProps<CommonModalProps, 'hasLogo'>
