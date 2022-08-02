import React from 'react'
import { Typography } from '../Typography'
import * as S from './styles'

const Card = ( { image, text }: Card.Props): React.ReactElement => {
  return (
    <S.Container image={ image }>
      <Typography color="primary">
        { text }
      </Typography>
    </S.Container>
    
  )
}

namespace Card {
  export interface Props {
    image?: any
    text?: string
  }
}
export { Card }