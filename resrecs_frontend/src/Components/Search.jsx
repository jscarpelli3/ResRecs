import RestaurantListing from '../Components/RestaurantListing'
import { Link } from 'react-router-dom'


const Search = ({term}) => {


  return (
    <div className="rest-listing">
      {term.map((rest, index) => (
        <Link key={rest._id} to={`/restaurants/${rest._id}`}>
          <RestaurantListing
            key={rest._id}
            image={rest?.image}
            name={rest?.rname}
            city={rest?.city}
          />
        </Link>
      ))}
    </div>
  )
}

export default Search