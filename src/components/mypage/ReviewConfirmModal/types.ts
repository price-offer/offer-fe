import type { ReactNode } from 'react'

export type ReviewConfirmModalProps = {
  isOpen: boolean
  nickName: string
  productName: string
  children?: ReactNode
  onClose(): void
}
