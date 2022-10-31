import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Comment from './Comment'
import UpdateRest from './UpdateRest'
import NewComment from './NewComment'

const RestDetails = () => {
  const [upDate, toggleUpdate] = useState(false)
  const [updateFinished, toggleFinished] = useState(false)
  const [comments, setComments] = useState(null)
  const [restDetails, setRestDetails] = useState(null)
  const [addComment, toggleAddComment] = useState(false)
  const [delComment, toggleDelComment] = useState(false)
  let { id } = useParams()
  let upId = id
  
  const addingComment = () => {
    toggleAddComment(!addComment)
  }

  const getDetails = async () => {
    const response = await axios.get(`/api/restaurants/${id}`
    )
      setRestDetails(response.data)
    }

    const getComments = async () => {
    const response = await axios.get(`/api/comment/${id}`
    ) 
    setComments(response.data.comments)
    }
    
    useEffect(() => {
      getDetails()
      getComments()
      toggleFinished(false)
    }, [updateFinished, delComment])
    
    
    const deleteListing = async () => {
      const response = await axios.delete(`/api/restaurants/${id}`)
    }
    
    const startUpdate = () => {
      toggleUpdate(!upDate)
    }
    


    return (
      <div className="detail-container">
        <div className="rest-details">
          <h2 className="rest-name">{restDetails?.rname} - <span>{restDetails?.city}</span></h2>
          <h5>Contributed by: {restDetails?.contributor}</h5><br></br>
          <h4 className="cuisine">Cuisine:  {restDetails?.cuisine}</h4>
          <div className='img-container'> 
            <img alt="rest-image" style={{ width: 360, height: 360 }} src={restDetails?.image}></img>
          </div>
          <Link to="/"><button className="delete-rest" onClick={deleteListing}>Delete Restaurant</button></Link> <button onClick={startUpdate}>Update Restaurant</button>
          <h5>Website: <a href={restDetails?.website} target="_blank">{restDetails?.website}</a></h5>
          <p className='notes'>Used for: {restDetails?.eventType}</p>
          <p className='notes'>Breafast: {restDetails?.breakfast ? "Yes" : "No"}<br></br>Lunch:{restDetails?.lunch ? "Yes" : "No"}<br></br>Dinner:{restDetails?.dinner ? "Yes" : "No"}</p>
          <p className='notes'>Notes:  {restDetails?.notes}</p>
          <div className="comments"></div>
            <h2>Comments:</h2>
               <button onClick={addComment ? undefined : addingComment}>Add Comment</button>
              {addComment ? <NewComment updated={updateFinished} toggleUpdated={toggleFinished} toggleAddComment={toggleAddComment} addComment={addComment} id={id}/> : undefined}
              <div className='comments-container'>
              {comments?.map((com, index) => (
                <Comment
                  key={com?._id}
                  name={com?.user}
                  comment={com?.comment}
                  id={com?._id}
                  del={delComment}
                  toggleDel={toggleDelComment}
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
