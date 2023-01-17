import type { ThemeOption } from '@types'

type AvatarKeys = keyof typeof avatar
type AvatarValues = typeof avatar[AvatarKeys]

export type Avatar = ThemeOption<AvatarKeys, AvatarValues>

export const avatar = {
  large: `
    width: 112px;
    height: 112px;
    & svg {
      width: 55px;
      height: 55px;
    }`,
  medium: `
    width: 80px;
    height: 80px;
    & svg {
      width: 40px;
      height: 40px;
    }`,
  small: `
    width: 46px;
    height: 46px;
    & svg {
      width: 23px;
      height: 23px;
    }`,
  xsmall: `
    width: 32px;
    height: 32px;
    & svg {
      width: 16px;
      height: 16px;
    }`
} as const