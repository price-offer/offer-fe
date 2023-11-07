import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Header } from '@components/common/Header'
import { Layout } from '@layouts'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const isUseMock = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

if (isUseMock) {
  await import('../mocks')
}

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  return (
    <QueryClientProvider client={queryClient}>
      <OfferStyleProvider theme={customTheme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OfferStyleProvider>
    </QueryClientProvider>
  )
}

export default App
