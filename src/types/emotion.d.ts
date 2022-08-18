import '@emotion/react'
import type { Colors, Radius } from '@themes'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors
    radius: Radius
  }
}
