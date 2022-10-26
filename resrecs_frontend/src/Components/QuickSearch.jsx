import axios from 'axios'
import { useState, useEffect } from 'react'

const QuickSearch = ({handleChange, handleSubmit, term, setTerm}) => {

  

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          city="search"
          value={term}
          placeholder="city"
          onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
          
    </form>
  )
}

export default QuickSearch