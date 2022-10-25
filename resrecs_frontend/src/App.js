import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
import TheRules from './pages/TheRules'
import Home from './pages/Home'
import AddRest from './Components/AddRest'
import axios from 'axios'
import { useState, useEffect } from 'react'
import QuickSearch from './Components/QuickSearch'

const App = () => {
  const [quickSearch, setQuickSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const handleChange = (event) => {
    setQuickSearch(event.target.value)
  }

  const searchByCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/restaurants?${quickSearch}`
      )
      setSearchResults(response.data.rests)
      console.log(response.data.rests)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Header />
      <div>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/searched" element={<Searched />} /> */}
            <Route path="/therules" element={<TheRules />} />
            <Route path="/add" element={<AddRest />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
