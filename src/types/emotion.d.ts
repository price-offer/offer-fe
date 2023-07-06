import '@emotion/react'
import type {
  Avatar,
  Border,
  Colors,
  CTAButton,
  Fonts,
  Input,
  MediaQuery,
  Radius,
  SelectBox,
  ZIndex
} from '@themes'

declare module '@emotion/react' {
  export type Theme = {
    border: Border
    colors: Colors
    fonts: Fonts
    mediaQuery: MediaQuery
    radius: Radius
    zIndex: ZIndex
    avatar: Avatar
    input: Input
    ctaButton: CTAButton
    selectBox: SelectBox
  }
}
