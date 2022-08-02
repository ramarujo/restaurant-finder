import axios from 'axios'

const createClient = ( baseURL: string ) => {
  const client = axios.create( {
    baseURL
  } )

  client.interceptors.response.use(
    ( response ) => response,
    ( err ) => {
      return Promise.reject( err.response.data )
    }
  )

  return client
}

const restaurantClient = createClient( 'https://605d074f9386d200171ba209.mockapi.io/api/v1' )

export { restaurantClient }