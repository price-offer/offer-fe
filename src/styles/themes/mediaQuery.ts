export type MediaQuery = typeof mediaQuery

export const mediaQuery = {
  desktop: '@media (max-width: 1920px)',
  mobile: '@media (max-width: 699px)',
  tablet: '@media (max-width: 1023px)'
} as const

type MaxWidth = number
export type Device = keyof typeof mediaQuery

export type MatchMediaQuery = {
  [key in Device]: `(max-width: ${MaxWidth}px)`
}
export const matchMediaQuery: MatchMediaQuery = {
  desktop: '(max-width: 1920px)',
  tablet: '(max-width: 1023px)',
  mobile: '(max-width: 699px)'
}
