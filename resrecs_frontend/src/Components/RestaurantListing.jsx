import { Link } from 'react-router-dom'


const RestaurantListing = ({onClick, image, name, city}) => {
  
  return (
    <div className="rest-card" onClick={onClick}>
      <div className="img-wrapper">
       <img src={image} alt="rest-image"></img>
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{city}</p>
      </div>
    </div>
  )
}

export default RestaurantListing