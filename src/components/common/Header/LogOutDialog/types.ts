import type { ReactNode } from 'react'

export type DialogProps = {
  isOpen: boolean
  children: ReactNode
  onLogout(): void
}

export type StyledDialogWrapperProps = {
  isOpen: boolean
}
