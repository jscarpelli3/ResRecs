import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const UpdateRest = ({updated, toggleUpdated, toggleForm, id, restname, cuisine, city, state, event, notes, breakfast, lunch, dinner, website, image}) => {
  const initialState = { }
  const [formState, setFormState] = useState(initialState)
  const rname=false



  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios.put(`http://localhost:3001/api/restaurants/${id}`, formState)
    setFormState(initialState)
    toggleForm()
    toggleUpdated(!updated)
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
        defaultValue={restname}
        placeholder={restname}
        />
        <br></br>
      <label htmlFor="cuisine">Cuisine:</label>
      <input
        type="text"
        id="cuisine"
        onChange={handleChange}
        defaultValue={cuisine}
        placeholder={cuisine}/>
        <br></br>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        onChange={handleChange}
        defaultValue={city}
        placeholder={city}
        /><br></br>
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        onChange={handleChange}
        defaultValue={state}
        placeholder={state}
        /><br></br>
      <label htmlFor="eventType">Event Type:</label>
      <select
        id="eventType"
        onChange={handleChange}
        defaultValue={event}
        placeholder={event}
        >
        <option value="Client Meeting">Client Meeting</option>
        <option value="Internal Meeting">Internal Meeting</option>
        <option value="Client Event">Client Event</option>
        <option value="Company Event">Company Event</option>
      </select><br></br>
      <label htmlFor="breakfast">Breakfast:</label>
        <input type="checkbox" id="breakfast" name="breakfast" value={breakfast} defaultChecked={breakfast} onChange={handleChange}></input>
      <label htmlFor="lunch">Lunch:</label>
        <input type="checkbox" id="lunch" name="lunch" value={lunch} defaultChecked={lunch} onChange={handleChange} value></input>
      <label htmlFor="dinner">Dinner:</label>
        <input type="checkbox" id="dinner" name="dinner" defaultChecked={dinner} value={dinner} onChange={handleChange}></input><br></br>
      <label htmlFor="notes">Message</label>
      <textarea
        id="notes"
        cols="30"
        rows="10"
        onChange={handleChange}
        defaultValue={notes}
        placeholder={notes}>
      </textarea><br></br>
      <label htmlFor="website">Website:</label>
      <input
        type="text"
        id="website"
        onChange={handleChange}
        defaultValue={website}
        placeholder={website}/><br></br>
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        defaultValue={image}
        placeholder={image}/><br></br>
      <button type="submit">Update Resaurant!</button>
    </form>
  </div>
  )
}

export default UpdateRest