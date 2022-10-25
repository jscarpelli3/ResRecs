import { Link } from 'react-router-dom'


const RestaurantListing = ({onClick, image, name, city}) => {
  
  return (
    <div className="rest-card" onClick={onClick}>
      <div className="img-wrapper">
       <img style={{ width: "50%", height: "50%" }} className="restpic" src={image} alt="rest-image"></img>
      </div>
      <div className="card-info">
        <h4>{name}</h4>
        <h5>{city}</h5>
      </div>
    </div>
  )
}

export default RestaurantListing