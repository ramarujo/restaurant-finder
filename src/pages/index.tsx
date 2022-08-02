import type { NextPage } from 'next'
import { Card } from '../components/atoms/Card'
import { Header } from '../components/organisms/Header/index'
import { Filter } from '../components/molecules/Filter'
import mock from '../__mocks__/restaurant.json'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Filter />
        <Card
          image={ mock.data[0].image}
          text={ mock.data[0].name }
        />
      </div>
    </>
  )
}

export default Home
