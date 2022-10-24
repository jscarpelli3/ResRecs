import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [showRests, setRests] = useState(null)

  const getRests = async () => {
    const response = await axios.get('localHost:3001//api/restaurants/alpha')
    setRests(response)
  }

  return <div>THIS IS HOME</div>
}

export default Home
