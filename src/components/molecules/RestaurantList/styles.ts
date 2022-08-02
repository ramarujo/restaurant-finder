import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.section`
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    width: 100%;
    margin-bottom: 30px;

  }
  div {
    margin-bottom: 20px;
  }

  @media(min-width: ${ theme.mediaQuery.desktop }) {
    max-width: 730px;
    padding: 0;
    padding: 30px 0;
    margin: auto;
  }
`

export { Container }