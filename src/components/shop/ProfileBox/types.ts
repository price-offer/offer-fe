import type { MyProfile } from '@types'

export type ProfileBoxProps = {
  className?: string
  likeProductCount?: number
  hasToken: boolean
} & Omit<MyProfile, 'likeProductCount'>
