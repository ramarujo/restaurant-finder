import { NextPage } from 'next'
import React from 'react'
import { RestaurantHeader } from '../../components/organisms/RestaurantHeader'
import { RestaurantMetadata } from '../../components/organisms/RestaurantMetadata'
import { RestaurantContext } from '../../contexts/RestaurantContext'
import { Restaurant, RestaurantFilter } from '../../Interfaces/RestaurantFilter'

const RestaurantProfile: NextPage = () => {
  const { activeRestaurant } = React.useContext<RestaurantFilter.Props>( RestaurantContext )

  return (
    <>
      <RestaurantHeader restaurantData={ activeRestaurant! }/>
      <RestaurantMetadata restaurantData={ activeRestaurant! } />
    </>
  )
}

export default RestaurantProfile