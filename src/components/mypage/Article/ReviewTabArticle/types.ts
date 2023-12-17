import type { IconType } from '@offer-ui/react'

export type ReviewTabArticleProps = {
  className?: string
}

export type IconMeta = {
  type: IconType
  text: string
}

export const ICON_META = {
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
} as { [key in number]: IconMeta }
