import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Card } from '../../atoms/Card'
import { Typography } from '../../atoms/Typography'
import { Restaurant, RestaurantFilter } from '../../../Interfaces/RestaurantFilter'
import { RestaurantService } from '../../../services/restaurant.service'
import { RestaurantContext } from '../../../contexts/RestaurantContext'
import Link from 'next/link'

const RestaurantList = (): React.ReactElement => {
  const { restaurants, handleAddRestaurants, loading, handleActiveRestaurant, handleCreateCache } = React.useContext<RestaurantFilter.Props>( RestaurantContext )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await RestaurantService.getAll()
        handleAddRestaurants?.( data.data )
        handleCreateCache?.( data.data )
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const handleClickRestaurant = ( restaurant: Restaurant) => {
    handleActiveRestaurant!( restaurant )
  }
  
  return (
    <S.Container>
      <Typography as="h2">Restaurantes</Typography>
      { loading ? <div> Carregando... </div> : restaurants?.map((restaurant: Restaurant) => {
        return ( 
        <Link
          key={ restaurant.id }
          href="/RestaurantProfile"
        >
          <Card
            onClick={ () => handleClickRestaurant( restaurant ) }
            key={restaurant.id}
            image={restaurant.image}
            text={restaurant.name}
          />
        </Link>
        )
      })}
    </S.Container>
  )
}

export { RestaurantList }