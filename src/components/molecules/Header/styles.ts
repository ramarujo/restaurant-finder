import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.header<Container.Props>`
  background: ${ props => props.page === 'restaurant' ?
    `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ props.background });` :
    `url(${ props.background });`}
  background-repeat: no-repeat;
  background-size: 1080px;
  background-position: center -220px;

  /* transform: scaleX(-1); */
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    background-size: cover;
    background-position: center;
  }
`

namespace Container {
  export interface Props {
    background: string
    page: 'home' | 'restaurant'
  }
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 30px; */

  @media(min-width: 1080px) {
    width: 1080px;
    margin: auto;
  }
`

export { Container, Content }