import React from 'react'
import * as S from './styles'
import { Restaurant } from '../../../Interfaces/RestaurantFilter'
import { RestaurantInfo } from '../../molecules/RestaurantInfo'
import { RestaurantTexts } from '../../../Interfaces/RestaurantTexts'
import { formatPhone } from '../../../utils/formatter'

const RestaurantMetadata = ( { restaurantData }: RestaurantMetadata.Props ): React.ReactElement => {
  return (
    <S.Container>
      <RestaurantInfo
        text={ restaurantData?.description || 'Descrição não encontrada' }
        title={ RestaurantTexts.description }
        isDescription
      />
      <S.Contact>
        <RestaurantInfo
          text={ formatPhone( restaurantData?.telephone || '9999999999' ) }
          title={ RestaurantTexts.contact }
        />
        <RestaurantInfo
          text={ restaurantData?.website || 'Site não encontrado' }
          title={ RestaurantTexts.site }
        />
      </S.Contact>
      <RestaurantInfo
        text={ restaurantData?.price_range || 'Faixa de preço não encontrada' }
        title={ RestaurantTexts.price }
        isSmall
      />
      <S.Divisor />
      <RestaurantInfo
        text={ restaurantData?.opening_hours || 'Horário de funcionamento não encontrado' }
        title={ RestaurantTexts.hours }
        isSmall
      />
      <RestaurantInfo
        text={ restaurantData?.payment_methods || 'Forma de pagamento não encontrada' }
        title="payment"
        isSmall
      />
    </S.Container>
  )
}

namespace RestaurantMetadata {
  export interface Props {
    restaurantData: Restaurant
  }
}

export { RestaurantMetadata }