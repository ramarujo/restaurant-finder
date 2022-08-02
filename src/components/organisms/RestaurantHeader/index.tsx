import { Typography } from '../../atoms/Typography'
import React from 'react'
import * as S from './styles'
import { Header } from '../../molecules/Header'
import { Restaurant } from '../../../Interfaces/RestaurantFilter'
import { formatPhone } from '../../../utils/formatter'
import empty from '../../../assets/images/card-empty.png'
import Link from 'next/link'

const RestaurantHeader = ( { restaurantData }: RestaurantHeader.Props ): React.ReactElement => {
  return (
    <Header background={ restaurantData.image || empty.src } page="restaurant">
      <S.Container>
        <Typography as="small" color="white">
          <Link
            href="/" 
          >
            Voltar
          </Link>
        </Typography>
        <S.Image
          src={ restaurantData.logo || empty.src }
        />
        <S.Information>
          <Typography
            as="h1"
            color="dark-down"
          >
            { restaurantData.name || 'Nome não encontrado'}
          </Typography>
          <S.Contact>
            <Typography
              as="p"
              color="white"
            >
              { formatPhone( restaurantData?.telephone || '9999999999' ) }
            </Typography>
            <Typography
              as="p"
              color="white"
            >
              { restaurantData.website }
            </Typography>
            </S.Contact>
          </S.Information>
      </S.Container>
    </Header>
  )
}

namespace RestaurantHeader {
  export interface Props {
    restaurantData: Restaurant
  }
}
export { RestaurantHeader }