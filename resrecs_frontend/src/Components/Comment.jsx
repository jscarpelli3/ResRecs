const Comment = ({name, comment}) => {
  
  return (
    <div className="comment-card">
      <h4>Comment By: {name}</h4>
      <p className="comment-text">"{comment}"</p>
    </div>
  )
}

export default Comment