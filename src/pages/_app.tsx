import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import { ErrorBoundary, Suspense } from '@suspensive/react'
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Header, HeaderSkeleton } from '@components/common/Header'
import { env } from '@constants'
import { Layout } from '@layouts'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const isUseMock = env.API_MOCKING === 'enabled'

if (isUseMock) {
  await import('../mocks')
}

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary fallback={<div>Error</div>} onReset={reset}>
            <OfferStyleProvider theme={customTheme}>
              <Suspense.CSROnly fallback={<HeaderSkeleton />}>
                <Header />
              </Suspense.CSROnly>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </OfferStyleProvider>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

export default App
