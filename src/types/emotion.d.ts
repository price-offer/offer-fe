import '@emotion/react'
import type { Colors } from '@themes'

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors
  }
}
