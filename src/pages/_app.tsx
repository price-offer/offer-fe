import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Header } from '@components/common/Header'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const isUseMock = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

if (isUseMock) {
  await import('../mocks')
}

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  return (
    <OfferStyleProvider theme={customTheme}>
      <Header />
      <Component {...pageProps} />
    </OfferStyleProvider>
  )
}

export default App
