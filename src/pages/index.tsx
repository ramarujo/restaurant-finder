import type { NextPage } from 'next'
import { HomeHeader } from '../components/organisms/HomeHeader/index'
import { Filter } from '../components/molecules/Filter'
import { RestaurantList } from '../components/molecules/RestaurantList'

const Home: NextPage = () => {
  return (
    <>
      <HomeHeader />
      <Filter />
      <RestaurantList />
    </>
  )
}

export default Home
