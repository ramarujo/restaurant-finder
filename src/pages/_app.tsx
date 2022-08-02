import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { RestaurantFinderThemeProvider } from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <RestaurantFinderThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </RestaurantFinderThemeProvider>
  )
}

export default App
