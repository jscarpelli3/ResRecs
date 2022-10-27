import { Link } from 'react-router-dom'


const RestaurantListing = ({onClick, image, name, city}) => {
  
  return (
    <div className="rest-card" onClick={onClick}>
        <h4>{name}</h4>
      <div className="img-wrapper">
       <img style={{ width: "140px", height: "140px" }} className="restpic" src={image} alt="rest-image"></img>
      </div>
      <div className="card-info">
        <h5>{city}</h5>
      </div>
    </div>
  )
}

export default RestaurantListing