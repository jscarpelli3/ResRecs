import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Comment from './Comment'
import UpdateRest from './UpdateRest'

const RestDetails = () => {
  const [upDate, toggleUpdate] = useState(false)
  const [updateFinished, toggleFinished] = useState(false)
  const [comments, setComments] = useState(null)
  const [restDetails, setRestDetails] = useState(null)
  let { id } = useParams()
  // let comment = []
  let upId = id
  
  
  const getDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/restaurants/${id}`
    )
      setRestDetails(response.data)
      console.log(response)
    }

    const getComments = async () => {
    const response = await axios.get(`http://localhost:3001/api/comment/${id}`
    )
      setComments(response.data.comments)
      // console.log(comment)
    }
    
    useEffect(() => {
      getDetails()
      getComments()
      toggleFinished(false)
    }, [updateFinished])
    
    
    const deleteListing = async () => {
      const response = await axios.delete(`http://localhost:3001/api//restaurants/${id}`)
    }
    
    const startUpdate = () => {
      toggleUpdate(!upDate)
    }
    
    return (
      <div className="detail-container">
        <div className="rest-details">
          <h2 className="rest-name">{restDetails?.rname}</h2>
          <h3 className="cuisine">{restDetails?.cuisine}</h3>
          <Link to="/"><button onClick={deleteListing}>Delete Listing</button></Link> <button onClick={startUpdate}>Update Listing</button>
          <div className='img-container'> 
            <img alt="rest-image" style={{ width: 360, height: 360 }} src={restDetails?.image}></img>
          </div>
          <h4>{restDetails?.city}</h4>
          <h5>Website: <a href={restDetails?.website} target="_blank">{restDetails?.website}</a></h5>
          <p>Used for: {restDetails?.eventType}</p>
          <p>Breafast: {restDetails?.breakfast ? "Yes" : "No"}<br></br>Lunch:{restDetails?.lunch ? "Yes" : "No"}<br></br>Dinner:{restDetails?.dinner ? "Yes" : "No"}</p>
          <h5>Contributed by: {restDetails?.contributor}</h5>
          <p>Notes:{restDetails?.notes}</p>
          <div className="comments"></div>
            <h2>Comments:</h2>
              <div className='comments-container'>
              {comments?.map((com, index) => (
                <Comment
                  key={com?._id}
                  name={com?.user}
                  comment={com?.comment}
                />
              ))}
              </div>
          </div>
      <div className="update-container">
        {upDate ? <UpdateRest updated={updateFinished} toggleUpdated={toggleFinished} toggleForm={toggleUpdate} id={upId} restname={restDetails.rname} cuisine={restDetails.cuisine} city={restDetails.city} state={restDetails.state} event={restDetails.eventType} notes={restDetails.notes} breakfast={restDetails.breakfast} lunch={restDetails.lunch} dinner={restDetails.dinner} website={restDetails.website} image={restDetails.image}/> : undefined}
      </div>
    </div>
  )
}

export default RestDetails
