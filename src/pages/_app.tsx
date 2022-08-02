import type { AppProps } from 'next/app'
import RestaurantProvider from '../contexts/RestaurantContext'
import { GlobalStyle } from '../styles/global'
import { RestaurantFinderThemeProvider } from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <RestaurantProvider>
      <RestaurantFinderThemeProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </RestaurantFinderThemeProvider>
    </RestaurantProvider>
  )
}

export default App
