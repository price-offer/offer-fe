import '@emotion/react'
import type { Border, Colors, MediaQuery, Radius } from '@themes'

declare module '@emotion/react' {
  export interface Theme {
    border: Border
    colors: Colors
    mediaQuery: MediaQuery
    radius: Radius
  }
}
