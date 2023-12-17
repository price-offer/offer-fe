import type { ReactElement } from 'react'

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
