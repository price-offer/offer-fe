import type { MyProfile } from '@types'

export type ProfileBoxProps = {
  className?: string
  likeProductCount?: number
  hasToken: boolean
  onClickEditButton(): void
} & Profile

export type Profile = Omit<MyProfile, 'likeProductCount'>
