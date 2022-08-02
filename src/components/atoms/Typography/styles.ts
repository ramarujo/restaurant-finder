import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

const Container = styled.span<TypographyProps>`
  ${( { theme, ...props } ) => {
    switch ( props.as ) {
      case 'h1' :
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize[ 'heading-2' ] };
          font-weight: ${ props.weight || theme.fontWeight.bold };
          color: ${ props.color || theme.colors.dark };

          @media ( min-width: ${ theme.mediaQuery.desktop } ) {
            font-size: ${ props.sizeDesktop || theme.fontSize['heading-1'] };
          }
        `
      case 'h2' :
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize[ 'heading-5' ] };
          font-weight: ${ props.weight || theme.fontWeight.bold };
          color: ${ props.color || theme.colors.dark };

          @media ( min-width: ${ theme.mediaQuery.desktop } ) {
            font-size: ${ props.sizeDesktop || theme.fontSize['heading-2'] };
          }
        `
      case 'h3' :
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize[ 'heading-6' ] };
          font-weight: ${ props.weight || theme.fontWeight.bold };
          color: ${ props.color || theme.colors.dark };

          @media ( min-width: ${ theme.mediaQuery.desktop } ) {
            font-size: ${ props.sizeDesktop || theme.fontSize['heading-3'] };
          }
        `
      case 'p' :
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize.paragraph };
          font-weight: ${ props.weight || theme.fontWeight.normal };
          color: ${ props.color || theme.colors.dark };

          @media ( min-width: ${ theme.mediaQuery.desktop } ) {
            font-size: ${ props.sizeDesktop || theme.fontSize.paragraph };
          }
        `
      case 'small' :
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize.small };
          font-weight: ${ props.weight || theme.fontWeight.normal };
          color: ${ props.color || theme.colors.dark };

          @media ( min-width: ${ theme.mediaQuery.desktop } ) {
            font-size: ${ props.sizeDesktop || theme.fontSize.paragraph };
          }
        `
      default:
        return css`
          font-size: ${ props.sizeMobile || theme.fontSize.lead };
          font-weight: ${ props.weight || theme.fontWeight.normal };
          color: ${ props.color || theme.colors.dark };

          @media (min-width: ${theme.mediaQuery.desktop}) {
            font-size: ${ props.sizeDesktop || theme.fontSize.lead };
          }
      `
    }
  } }
`

interface TypographyProps {
  as?: string 
  color?: keyof typeof theme.colors
  sizeDesktop?: keyof typeof theme.fontSize
  sizeMobile?: keyof typeof theme.fontSize
  weight?: keyof typeof theme.fontWeight
}

export { Container }