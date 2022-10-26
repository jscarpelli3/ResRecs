import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div>
      <h1>Thank You!</h1>
      <p>
        <Link to="/">
          <button> Return Home </button>
        </Link>
      </p>
    </div>
  )
}

export default Thanks
