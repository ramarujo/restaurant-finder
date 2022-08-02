import { createGlobalStyle  } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    @media ( max-width: 1080px ) {
      font-size: 93.75%;
    }

    @media ( max-width: 720px ) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, textarea, button { 
    font-weight: var(--normal);
    color: var(--dark);
  }

  button {
    cursor: pointer;
  }

  [ disabled ] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`