import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AddRest = () => {
  const initialState = { rname:'', cuisine: '', city: '', state:'', eventType: '', breakfast: false, lunch: false, dinner: false, website: '', notes: '', image: '', contributor: ''}
  const [formState, setFormState] = useState(initialState)
  const rname=false
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    let newRest = {...formState, contributor: "6352d1d1e2832c5fd43ad0e7"}
    axios.post('http://localhost:3001/api/newrestaurant', newRest)
    setFormState(initialState)
    navigate('/thanks')
  }

  const handleChange = (evt) => {
    setFormState({ ...formState, [evt.target.id]: evt.target.value })
  }

  return (
  <div className="add-container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="rname">Name of Restaurant:</label>
        <input
        type="text"
        id="rname"
        onChange={handleChange}
        value={formState.rname}/>
        <br></br>
      <label htmlFor="cuisine">Cuisine:</label>
      <input
        type="text"
        id="cuisine"
        onChange={handleChange}
        value={formState.cuisine}/>
        <br></br>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        onChange={handleChange}
        value={formState.city}/><br></br>
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        onChange={handleChange}
        value={formState.state}/><br></br>
      <label htmlFor="eventType">Event Type:</label>
      <select
        id="eventType"
        onChange={handleChange}
        value={formState.issueType}>
        <option value="" disabled selected>Select An Option</option>
        <option value="Client Meeting">Client Meeting</option>
        <option value="Internal Meeting">Internal Meeting</option>
        <option value="Client Event">Client Event</option>
        <option value="Company Event">Company Event</option>
      </select><br></br>
      <label htmlFor="breakfast">Breakfast:</label>
        <input type="checkbox" id="breakfast" name="breakfast" value="true" onChange={handleChange}></input><br></br>
      <label htmlFor="lunch">Lunch:</label>
        <input type="checkbox" id="lunch" name="lunch" value="true" onChange={handleChange}></input><br></br>
      <label htmlFor="dinner">Dinner:</label>
        <input type="checkbox" id="dinner" name="dinner" value="true" onChange={handleChange}></input><br></br>
      <label htmlFor="notes">Message</label>
      <textarea
        id="notes"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.notes}>
      </textarea><br></br>
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        id="website"
        onChange={handleChange}
        value={formState.website}/><br></br>
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formState.image}/><br></br>
      <button type="submit">Add New Resaurant!</button>
    </form>
  </div>
  )
}

export default AddRest