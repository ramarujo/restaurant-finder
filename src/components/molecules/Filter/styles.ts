import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.section`
  padding: 32px 30px;
  background-color: ${ theme.colors.white };
  border-radius: 32px 32px 0 0;
  margin-top: -32px;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    background-color: transparent;
    max-width: 540px;
    margin: -120px auto 0;
  }
`

export { Container }