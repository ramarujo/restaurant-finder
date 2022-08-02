import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.div`
  margin-bottom: 30px;
  .restaurant-info__title {
    margin-bottom: 3px;
  }
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    .restaurant-info__title {
    margin-bottom: 4px;
  }  }
`

export { Container }