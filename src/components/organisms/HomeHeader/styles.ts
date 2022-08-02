import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.div`
  height: 253px;
  padding: 30px;

  h1 {
    max-width: 230px;
    margin: 10px 0 20px;
  } 

  
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    height: 315px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      max-width: 100%;
      margin: 10px 0 6px;
    }
    span {
      max-width: 350px;
      text-align: end;
    }
  }
`

export { Container }