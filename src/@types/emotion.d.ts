import '@emotion/react'
import type {
  Avatar,
  Border,
  Colors,
  CtaButton,
  Fonts,
  Input,
  MediaQuery,
  Radius,
  SelectBox,
  ZIndex,
  Mixins
} from '@themes'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface Theme {
    border: Border
    colors: Colors
    fonts: Fonts
    mediaQuery: MediaQuery
    radius: Radius
    zIndex: ZIndex
    avatar: Avatar
    input: Input
    ctaButton: CtaButton
    selectBox: SelectBox
    mixins: Mixins
  }
}
