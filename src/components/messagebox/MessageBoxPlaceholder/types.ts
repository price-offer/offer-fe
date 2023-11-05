import type { ColorKeys } from '@styles/themes'
import type { StyledProps } from '@types'

export type MessageBoxPlaceholderProps = {
  color?: ColorKeys
  message: string
  image?: {
    url: string
    width: string
    height: string
  }
}

export type StyledMessageProps = StyledProps<
  MessageBoxPlaceholderProps,
  'color'
>
