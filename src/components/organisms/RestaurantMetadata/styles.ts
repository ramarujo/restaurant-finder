import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.section`
  padding: 30px;

  @media(min-width: ${ theme.mediaQuery.desktop }) {
    max-width: 540px;
    margin: auto;
  }
`

const Contact = styled.div`
  display: block;
  .restaurant-info__title.Site {
    display: none;
  }
  .restaurant-info__text.Site {
    margin-top: -30px;
  }
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    display: none;
    
  }
`

const Divisor = styled.div`
  width: 100%;
  border: 1px solid ${ theme.colors.light };
  margin-bottom: 30px;
`

export { Container, Contact, Divisor }