import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  'colors': {
    'primary': '#ED1C24',
    'dark-down': '#333333', 
    'dark': '#666666',
    'dark-up': '#808080',
    'white': '#fff',
    'light-down': '#AAAAAA',
    'light': '#CCCCCC',
    'light-medium': '#E6E6E6',
    'light-up': '#F2F2F2',
    'empty': '#FFD4C8'
  },
  'fontSize': {
    'heading-1': '32px',
    'heading-2': '24px',
    'heading-3': '20px',
    'heading-4': '17px',
    'heading-5': '15px',
    'heading-6': '16px',
    'lead': '17px',
    'paragraph': '14px',
    'small': '12px',
  },
  'fontWeight': {
    'bold': '700',
    'normal': '400',
  },
  'mediaQuery': {
    'desktop': '1080px'
  }
}

const RestaurantFinderThemeProvider = ( { children }: RestaurantFinderThemeProvider.Props ) => {
  return <ThemeProvider theme={ theme }> { children }</ThemeProvider>
}

namespace RestaurantFinderThemeProvider {
  export interface Props {
    children?: React.ReactNode
  }
}

export { theme, RestaurantFinderThemeProvider }