import React from 'react'
import * as S from './styles'
import { theme } from '../../../styles/theme'

const Typography = ( ( {
  children,
  className,
  color,
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
      sizeDesktop={ sizeDesktop }
      sizeMobile={ sizeMobile }
      weight={ weight }
    >
      { children }
    </S.Container>
  )
} )

namespace Typography {
  export interface Props {
    as?: any
    children?: any
    className?: string
    color?: keyof typeof theme.colors
    sizeDesktop?: keyof typeof theme.fontSize
    sizeMobile?: keyof typeof theme.fontSize
    weight?: keyof typeof theme.fontWeight
  }
}

export { Typography }