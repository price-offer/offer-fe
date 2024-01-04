import type { IconType } from '@offer-ui/react'
import type { Review } from '@types'

export type ReviewTabPostProps = {
  className?: string
} & Review

export type IconMeta = {
  type: IconType
  text: string
}

export const ICON_META: { [key in number]: IconMeta } = {
  0: {
    type: 'sadFill',
    text: '별로에요'
  },
  1: {
    type: 'mehFill',
    text: '보통이에요'
  },
  2: {
    type: 'smileFill',
    text: '좋아요'
  }
}
