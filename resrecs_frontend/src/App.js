import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
import Main from './Components/Main'
import axios from 'axios'
import { useState, useEffect } from 'react'

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
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App
