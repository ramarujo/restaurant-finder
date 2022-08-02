import React from 'react'
import * as S from './styles'
import { Typography } from '../../atoms/Typography'

const RestaurantInfo = ( { isDescription, isSmall, title, text }: RestaurantInfo.Props ): React.ReactElement => {
  return (
    <S.Container>
      <Typography
        as="h4"
        className={`restaurant-info__title ${ title }`}
        color="dark-down"
        sizeDesktop={ isDescription ? 'heading-3' : 'paragraph' }
      >
        { title }
      </Typography>
      <Typography
        as="p"
        className={`restaurant-info__text ${ title }`}
        color="dark-up"
        sizeDesktop="lead"
        sizeMobile={ isSmall ? 'small' : 'paragraph' }
      >
        { text }
      </Typography>
    </S.Container>
  )
}

namespace RestaurantInfo {
  export interface Props {
    isDescription?: boolean
    isSmall?: boolean
    text: string
    title: string
  }
}

export { RestaurantInfo }