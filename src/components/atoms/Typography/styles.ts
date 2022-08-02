import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.span<TypographyProps>`
  font-size: ${ props => theme.fontSize[ props.sizeMobile ] };
  font-weight: ${ props => theme.fontWeight[ props.weight ] };
  color: ${ props => theme.colors[ props.color ] };
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    font-size: ${ props => theme.fontSize[ props.sizeDesktop ] };
  }
`

interface TypographyProps {
  color: keyof typeof theme.colors
  sizeDesktop: keyof typeof theme.fontSize
  sizeMobile: keyof typeof theme.fontSize
  weight: keyof typeof theme.fontWeight
}

export { Container }