import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import { ErrorBoundary } from '@suspensive/react'
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Layout } from '@layouts'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps): ReactElement | null => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary fallback={<div>Error</div>} onReset={reset}>
            <OfferStyleProvider theme={customTheme}>
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
