import { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantListing from '../Components/RestaurantListing'
import { Link } from 'react-router-dom'
import QuickSearch from '../Components/QuickSearch'

const Home = () => {
  const [restaurants, setRests] = useState(null)

  const getRests = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/main')
      setRests(response.data.rests)
      console.log(restaurants)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRests()
  }, [])

  const onClick = () => {
    console.log('I FUGGIN CLICKED')
  }

  return (
    <div className="rest-listing">
      {restaurants?.map((rest, index) => (
        <Link key={rest.id} to={`/retaurants/${rest.id}`}>
          <RestaurantListing
            key={rest.id}
            onClick={onClick}
            image={rest.image}
            name={rest?.rname}
            city={rest?.city}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
