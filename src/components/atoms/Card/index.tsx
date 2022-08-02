import React from 'react'
import { Typography } from '../Typography'
import * as S from './styles'

const Card = ( { image, onClick, text }: Card.Props): React.ReactElement => {
  return (
    <S.Container
      image={ image }
      onClick={ onClick }
    >
      <Typography
        color="white"
        weight="bold"
        sizeDesktop="lead"
        sizeMobile="small"
        >
        { text }
      </Typography>
    </S.Container>
  )
}

namespace Card {
  export interface Props {
    image?: any
    onClick?: () => void
    text?: string
  }
}
export { Card }