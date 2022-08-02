import React from 'react'
import { RestaurantFilter, Restaurant } from '../Interfaces/RestaurantFilter'

export const RestaurantContext = React.createContext<RestaurantFilter.Props>( {
  'activeRestaurant': {},
  'cache': [],
  'handleAddRestaurants': () => {},
  'handleActiveRestaurant': () => {},
  'handleCreateCache': () => {},
  'loading': true,
  'restaurants': []
} )

const RestaurantProvider = ( { children }: RestaurantFilter.Props ): React.ReactElement => {
  const [ restaurants, setRestaurants ] = React.useState<Restaurant[]>( [] )
  const [ cache, setCache ] = React.useState<Restaurant[]>( [] )
  const [ loading, setLoading ] = React.useState( false )
  const [ activeRestaurant, setActiveRestaurant ] = React.useState<Restaurant>( {} )

  const handleAddRestaurants = ( data: Restaurant[]) => {
    setRestaurants( data )
    setLoading( false )
  }

  const handleActiveRestaurant = ( data: Restaurant ) => {
    setActiveRestaurant( data )
  }

  const handleCreateCache = ( data: Restaurant[]) => {
    setCache( data )
  }

  return (
    <RestaurantContext.Provider value={{ activeRestaurant, handleActiveRestaurant, handleAddRestaurants, handleCreateCache, loading, restaurants, cache }}>
      { children }
    </RestaurantContext.Provider>
  )
}

export default RestaurantProvider