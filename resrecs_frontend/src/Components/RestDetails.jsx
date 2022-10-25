import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Comment from './Comment'

const RestDetails = () => {
  const [selectedRest, setSelectedRest] = useState(null)
  const [restDetails, setRestDetails] = useState(null)
  let { id } = useParams()
  let comment = []

  
  const getDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/restaurants/${id}`
    )
      setRestDetails(response.data.rest)
      console.log(response.data.rest)
    }
    
    useEffect(() => {
      getDetails()
    }, [])

    const deleteListing = async () => {
  const response = await axios.delete(`http://localhost:3001/api//restaurants/${id}`)

}


  return (
    <div className="rest-details">
        <h3 className="rest-name">{restDetails?.rname}</h3>
        <Link to="/"><button onClick={deleteListing}>Delete Listing</button></Link>
        <div className='img-container'> 
        <img alt="rest-image" src={restDetails?.image}></img></div>
        <h3>{restDetails?.city}</h3>
        <h4>Website: <a href={restDetails?.website} target="_blank">{restDetails?.website}</a></h4>
        <p>Used for: {restDetails?.eventType}</p>
        <p>Breafast: {restDetails?.breakfast ? "Yes" : "No"}<br></br>Lunch:{restDetails?.lunch ? "Yes" : "No"}<br></br>Dinner:{restDetails?.dinner ? "Yes" : "No"}</p>
        <h5>Contributed by: {restDetails?.contributor.username}</h5>
        <p>Notes:{restDetails?.notes}</p>
        <div className="comments"></div>
        <h2>Comments:</h2>
      <div className='comments-container'>
      {comment?.map((com, index) => (
          <Comment
            key={com._id}
            name={com.user}
            comment={com.comment}
          />
      ))}
      </div>
    </div>
  )
}

export default RestDetails
