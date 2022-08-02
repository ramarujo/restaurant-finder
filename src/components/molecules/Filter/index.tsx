import { Input } from '../../atoms/Input'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import SearchIcon from '../../../assets/images/search.svg'
import { RestaurantFilter } from '../../../Interfaces/RestaurantFilter'
import { RestaurantContext } from '../../../contexts/RestaurantContext'
import { RestaurantService } from '../../../services/restaurant.service'

const Filter = (): React.ReactElement => {
  const { handleAddRestaurants, restaurants, cache } = React.useContext<RestaurantFilter.Props>( RestaurantContext )

  const handleInputChange = async(e: any) => {
    const newData = cache?.filter((item) => item.name === e.target.value)
    if ( newData?.length! > 0 ) {
      try {
        const { data } = await RestaurantService.get(newData?.[0].id!)
        console.log(data)
        handleAddRestaurants?.( [ data.data ] )
      } catch (err) {
      } 
    }

    if ( !e.target.value ) {
      handleAddRestaurants?.( cache! )
    }
  }

  return (
    <S.Container>
      <Input
        icon={ SearchIcon.src }
        placeholderText="Encontre um restaurante"
        onChange={(e: any) => handleInputChange(e) }
      />
    </S.Container>
  )
}

export { Filter }