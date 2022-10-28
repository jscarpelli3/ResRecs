import axios from 'axios'

const Comment = ({toggleDel, del, id, name, comment}) => {
  
  const deleteComment = async () => {
    const response = await axios.delete(`http://localhost:3001/api/comment/${id}`)
    toggleDel(!del)
  } 
  
  return (
    <div className="comment-card">
      <h4>Comment By: {name}</h4>
      <p className="comment-text">"{comment}"</p>
      <button onClick={deleteComment}>Delete Comment</button>
          </div>
  )
}

export default Comment