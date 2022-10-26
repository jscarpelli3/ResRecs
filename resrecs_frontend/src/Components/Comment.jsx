const Comment = ({name, comment}) => {
  
  return (
    <div className="comment-card">
      <h4>User:</h4>
      <div>{name}</div>
      <h5>Comment:</h5>
      <p>{comment}</p>
    </div>
  )
}

export default Comment