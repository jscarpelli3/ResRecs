import { useState } from 'react'
import axios from 'axios'

const NewComment = ({updated, toggleUpdated, toggleAddComment, addComment, id}) => {

  const initComment = {user: '', comment: '', rest: ''}
  const [newComment, setNewComment] = useState(initComment)
  

  
  const submitComment = (evt) => {
    evt.preventDefault()
    let newCom = {...newComment, user: "6352d1d1e2832c5fd43ad0e7", rest: id}
    axios.post('http://localhost:3001/api/comment', newCom)
    toggleAddComment(!addComment)
    toggleUpdated(!updated)
  }

  const handleChange = (evt) => {
       setNewComment({...newComment, [evt.target.id]: evt.target.value})
  }

  return (

        <form onSubmit={submitComment}>
        <button>Submit Comment</button>
        {addComment ? <div className="new-comment">
                    {/* <label htmlFor="comment">Add a comment:</label> */}
                    <textarea
                      id="comment"
                      cols="30"
                      rows="10"
                      onChange={handleChange}
                      placeholder="Add your comment">
                    </textarea><br></br>
                    </div> : undefined}
        </form>
        )
  }

export default NewComment