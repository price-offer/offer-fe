import { OfferStyleProvider } from '@offer-ui/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { initMocks } from '../mocks'

initMocks()

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <OfferStyleProvider>
      <Component {...pageProps} />
    </OfferStyleProvider>
  )
}

export default App
