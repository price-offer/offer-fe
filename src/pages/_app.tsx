import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { theme } from '@themes'
import { ThemeProvider } from '@emotion/react'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
