import { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantListing from '../Components/RestaurantListing'
import { Link } from 'react-router-dom'
import QuickSearch from '../Components/QuickSearch'

const Home = () => {
  const [restaurants, setRests] = useState(null)

  const getRests = async () => {
    try {
      const response = await axios.get('/api/main')
      setRests(response.data.rests)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRests()
  }, [])

  const onClick = () => {}

  return (
    <div className="rest-listing">
      {restaurants?.map((rest, index) => (
        <Link key={rest._id} to={`/restaurants/${rest._id}`}>
          <RestaurantListing
            key={rest._id}
            onClick={onClick}
            image={rest?.image}
            name={rest?.rname}
            city={rest?.city}
            cuisine={rest?.cuisine}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
