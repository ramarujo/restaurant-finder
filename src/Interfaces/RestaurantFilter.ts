import React from 'react'

export type Restaurant = {
  id?: string
  name?: string
  image?: string
  logo?: string
  description?: string
  telephone?: string
  price_range?: string
  payment_methods?: string
  website?: string
  opening_hours?: string
}

export namespace RestaurantFilter {
  export interface Props {
    loading?: boolean
    handleAddRestaurants?: ( data: Restaurant[] ) => void
    handleActiveRestaurant?:  ( data: Restaurant ) => void
    handleCreateCache?: ( data: Restaurant[] ) => void
    restaurants?: Restaurant[]
    cache?: Restaurant[]
    activeRestaurant?: Restaurant
    children?: React.ReactNode
  }
}