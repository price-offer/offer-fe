import type { ThemeOption } from '@types'

type CTAButtonKeys = keyof typeof ctaButton
type CTAButtonValues = typeof ctaButton[CTAButtonKeys]

export type CTAButton = ThemeOption<CTAButtonKeys, CTAButtonValues>

export const ctaButton = {
  large: {
    height: '64px',
    width: '370px'
  },
  medium: {
    height: '48px',
    width: '370px'
  },
  small: {
    height: '64px',
    width: '72px'
  }
} as const
