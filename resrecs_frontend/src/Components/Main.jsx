import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import TheRules from '../pages/TheRules'
import AddRest from './AddRest'
import QuickSearch from './QuickSearch'
import RestDetails from './RestDetails'
import Search from './Search'
import Thanks from '../pages/Thanks'
import Login from './Login'


const Main = () => {
  const initialState = ''
  const [searchTerm, setSearchTerm] = useState(initialState)
  const [searchResults, setSearchResults] = useState(null)
  const navigate = useNavigate()
  const initCurLogin = {username:'', pass:'', userId: ''}
  const [curLogin, setCurLogin]=useState(initCurLogin)


  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

const searchByCity = async (evt) => {
  evt.preventDefault()
  try {
    const response = await axios.get(`/api/restaurants?city=${searchTerm}`)
    setSearchResults(response.data.rests)
    console.log(response.data.rests)
    navigate('/Search')
  } catch (err) {
    console.log(err)
  }
}



  return (
    <div className="main">
      <div className='side'>
      <QuickSearch term={searchTerm} setTerm={setSearchTerm} handleChange={handleChange} handleSubmit={searchByCity}/>
      <div className="login"><Login username={curLogin.username} pass={curLogin.pass} userId={curLogin.userId}/></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search term={searchResults}/>} />
        <Route path="/therules" element={<TheRules />} />
        <Route path="/add" element={<AddRest curUser={curLogin.username} curId={curLogin.userId}/>} />
        <Route path="/restaurants/:id" element={<RestDetails />} />
        <Route path="/update" element={<updateRest />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      </div>
  )
}

export default Main