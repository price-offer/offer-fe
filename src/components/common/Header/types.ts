import type { ReactNode } from 'react'

export type AlertModalProps = {
  isOpen: boolean
  hasCheckIcon: boolean
  title: string | ReactNode
  subTitle?: string | ReactNode
  buttonContents: string
  onClose(): void
  onClickConfirmButton(): void
}
