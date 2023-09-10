import type { ReactNode } from 'react'

export type AlertModalProps = {
  isOpen: boolean
  isCheckShape: boolean
  title: string | ReactNode
  subTitle?: string | ReactNode
  buttonContents: string
  onClose(): void
  onClick(): void
}
