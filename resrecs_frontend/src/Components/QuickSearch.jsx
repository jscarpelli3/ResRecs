import axios from 'axios'
import { useState, useEffect } from 'react'

const QuickSearch = ({handleChange, handleSubmit, term, setTerm}) => {

  

  return (
    <div className='qsearch'>
      <h3>Search by City:</h3>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            city="search"
            value={term}
            placeholder="city"
            onChange={handleChange}
            ></input>
            <button className="qs-submit" type="submit">Submit</button>
            
      </form>
    </div>
  )
}

export default QuickSearch