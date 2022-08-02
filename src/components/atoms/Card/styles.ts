import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'
import empty from '../../../assets/images/card-empty.png'

const Container = styled.div<Container.Props>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ props => props.image || empty.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 160px;
  width: 148px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px ${ theme.colors['light-medium']};
  padding: 10px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    height: 170px;
    width: 350px;
  }
  :hover {
    opacity : 0.9;
  }
`

namespace Container {
  export interface Props {
    image?: string
  }
}

export { Container }