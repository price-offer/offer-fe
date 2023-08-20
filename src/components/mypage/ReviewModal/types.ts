import type { ReactNode } from 'react'

export type ReviewModalProps = {
  isOpen: boolean
  nickName: string
  productName: string
  children?: ReactNode
  onClose(): void
}

export type StyledReviewIconProps = {
  isFill: boolean
}
