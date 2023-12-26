import type { ColorKeys } from '@styles/themes'

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
