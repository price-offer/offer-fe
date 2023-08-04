import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { initMocks } from '../mocks'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  const [isReadyMock, setIsReadyMock] = useState<boolean>(false)
  initMocks().then(() => setIsReadyMock(true))

  if (!isReadyMock) return null

  return (
    <OfferStyleProvider theme={customTheme}>
      <Component {...pageProps} />
    </OfferStyleProvider>
  )
}

export default App
