import type { ThemeOption } from '@types'

type AvatarKeys = keyof typeof avatar
type AvatarValues = typeof avatar[AvatarKeys]

export type Avatar = ThemeOption<AvatarKeys, AvatarValues>

export const avatar = {
  image: {
    large: {
      height: '55px',
      width: '55px'
    },
    medium: {
      height: '40px',
      width: '40px'
    },
    small: {
      height: '23px',
      width: '23px'
    },
    xsmall: {
      height: '16px',
      width: '16px'
    }
  },
  wrapper: {
    large: {
      height: '112px',
      width: '112px'
    },
    medium: {
      height: '80px',
      width: '80px'
    },
    small: {
      height: '46px',
      width: '46px'
    },
    xsmall: {
      height: '32px',
      width: '32px'
    }
  }
} as const
