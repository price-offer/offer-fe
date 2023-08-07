import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  const isUseMock = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

  const [isReadyMock, setIsReadyMock] = useState<boolean>(!isUseMock)

  if (isUseMock) {
    const mock = async (): Promise<any> => {
      const { initMocks } = await import('../mocks')
      await initMocks()
      setIsReadyMock(true)
    }
    mock()
  }

  if (!isReadyMock) {
    return null
  }

  return (
    <OfferStyleProvider theme={customTheme}>
      <Component {...pageProps} />
    </OfferStyleProvider>
  )
}

export default App
