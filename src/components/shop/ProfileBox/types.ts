import type { MyProfile } from '@types'

export type ProfileBoxProps = {
  className?: string
  likeProductCount?: number
} & Omit<MyProfile, 'likeProductCount'>
