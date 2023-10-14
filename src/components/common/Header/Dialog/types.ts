import type { ReactNode } from 'react'

export type DialogProps = {
  isOpen: boolean
  children: ReactNode
  dialogPositionStyle?: {
    top?: string
    right?: string
    left?: string
    bottom?: string
  }
  onClose(): void
  handleClickDialog?(): void
}

export type StyledDialogWrapperProps = {
  isOpen: boolean
}
