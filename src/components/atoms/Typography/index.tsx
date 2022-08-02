import React from 'react'
import * as S from './styles'
import { theme } from '../../../styles/theme'
import defaultStyle, { Element } from '../../../Interfaces/typographyDefaultStyle'

const Typography = ( ( {
  children,
  className,
  color = 'dark',
  sizeDesktop,
  sizeMobile,
  weight,
  as = 'span',
}: Typography.Props ) => {
  return (
    <S.Container
      as={ as }
      className={ className }
      color={ color }
      sizeDesktop={ sizeDesktop || defaultStyle[ as ].sizeDesktop }
      sizeMobile={ sizeMobile || defaultStyle[ as ].sizeMobile }
      weight={ weight || defaultStyle[ as ].weight }
    >
      { children }
    </S.Container>
  )
} )

namespace Typography {
  export interface Props {
    as?: Element
    children?: any
    className?: string
    color?: keyof typeof theme.colors
    sizeDesktop?: keyof typeof theme.fontSize
    sizeMobile?: keyof typeof theme.fontSize
    weight?: keyof typeof theme.fontWeight
  }
}

export { Typography }