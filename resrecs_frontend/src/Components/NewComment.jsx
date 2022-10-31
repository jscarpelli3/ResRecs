import { useState } from 'react'
import axios from 'axios'

const NewComment = ({updated, toggleUpdated, toggleAddComment, addComment, id}) => {

  const initComment = {user: '', comment: '', rest: ''}
  const [newComment, setNewComment] = useState(initComment)
  

  
  const submitComment = (evt) => {
    evt.preventDefault()
    let newCom = {...newComment, user: "Jon", rest: id}
    axios.post('/api/comment', newCom)
    toggleAddComment(!addComment)
    toggleUpdated(!updated)
  }

  const handleChange = (evt) => {
       setNewComment({...newComment, [evt.target.id]: evt.target.value})
  }

  return (

        <form onSubmit={submitComment}>
        <button className='submit-button'>Submit Comment</button>
        {addComment ? <div className="new-comment">
                    {/* <label htmlFor="comment">Add a comment:</label> */}
                    <textarea className='new-comment-input'
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