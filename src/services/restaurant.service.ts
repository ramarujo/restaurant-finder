import { restaurantClient  } from './base.service'
import { Restaurant } from '../Interfaces/RestaurantFilter'

const RestaurantService = {
  getAll() {
    return restaurantClient.get<Restaurant[]>('restaurants')
  },
  get( query: string) {
    return restaurantClient.get<Restaurant[]>('restaurants/' + query)
  }
}

export { RestaurantService }