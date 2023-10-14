import type { ReactNode } from 'react'

export type DialogProps = {
  isOpen: boolean
  children: ReactNode
  handleClickDialog?(): void
}

export type StyledDialogWrapperProps = {
  isOpen: boolean
}
