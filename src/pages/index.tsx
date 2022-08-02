import type { NextPage } from 'next'
import { Header } from '../components/organisms/Header/index'
import { Filter } from '../components/molecules/Filter'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Filter />
      </div>
    </>
  )
}

export default Home
