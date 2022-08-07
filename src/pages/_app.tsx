import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default App
