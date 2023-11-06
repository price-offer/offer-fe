import type { ReactNode } from 'react'

export type DialogProps = {
  children: ReactNode
  dialogPositionStyle?: {
    top?: string
    right?: string
    left?: string
    bottom?: string
  }
  onClose(): void
}
