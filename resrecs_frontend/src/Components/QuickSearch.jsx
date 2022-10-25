import axios from 'axios'
import { useState, useEffect } from 'react'

const QuickSearch = ({value}) => {
  const [quickSearch, setQuickSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const handleChange = (event) => {
    setQuickSearch(event.target.value)
  }

  const searchByCity = async () => {
    try {
      console.log('FUGGIN SERCH BY CITY')
      const response = await axios.get(`http://localhost:3001/api/restaurants?${quickSearch}`)
      setSearchResults(response.data.rests)
      console.log(searchResults)
    } catch (err) {
      console.log(err)
    }
  }
  

  return (
    <form onSubmit={searchByCity}>
        <input
          type="text"
          city="search"
          value={quickSearch}
          placeholder="city"
          onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
          
    </form>
  )
}

export default QuickSearch