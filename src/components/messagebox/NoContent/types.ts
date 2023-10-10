import type { ReactNode } from 'react'
import type { ColorKeys } from '@styles/themes'
import type { StyledProps } from '@types'

export type NoContentProps = {
  color?: ColorKeys
  message: string
  image?: {
    url: string
    width: string
    height: string
  }
  hasContent?: boolean
  children: ReactNode
}

export type StyledMessageProps = StyledProps<NoContentProps, 'color'>
