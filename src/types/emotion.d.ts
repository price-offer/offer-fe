import '@emotion/react'
import type { Colors, MediaQuery, Radius } from '@themes'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors
    mediaQuery: MediaQuery
    radius: Radius
  }
}
