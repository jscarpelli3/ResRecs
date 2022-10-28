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
    <form className="add-form" onSubmit={handleSubmit}>
        <label className="add-label"  htmlFor="rname">Name of Restaurant:</label>
        <input
        className="add-input"
        type="text"
        id="rname"
        onChange={handleChange}
        defaultValue={restname}
        placeholder={restname}
        />
        <br></br>
      <label className="add-label" htmlFor="cuisine">Cuisine:</label>
      <input
       className="add-input"
        type="text"
        id="cuisine"
        onChange={handleChange}
        defaultValue={cuisine}
        placeholder={cuisine}/>
        <br></br>
      <label className="add-label" htmlFor="city">City:</label>
      <input
        className="add-input"
        type="text"
        id="city"
        onChange={handleChange}
        defaultValue={city}
        placeholder={city}
        /><br></br>
      <label className="add-label" htmlFor="state">State:</label>
      <input
        className="add-input"
        type="text"
        id="state"
        onChange={handleChange}
        defaultValue={state}
        placeholder={state}
        /><br></br>
      <label className="add-label" htmlFor="eventType">Event Type:</label>
      <select
        className="add-input"
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
      <label className="add-label" htmlFor="breakfast">Breakfast:</label>
        <input className="add-input" type="checkbox" id="breakfast" name="breakfast" value={breakfast} defaultChecked={breakfast} onChange={handleChange}></input>
      <label className="add-label" htmlFor="lunch">Lunch:</label>
        <input  className="add-input" type="checkbox" id="lunch" name="lunch" value={lunch} defaultChecked={lunch} onChange={handleChange} value></input>
      <label className="add-label" htmlFor="dinner">Dinner:</label>
        <input className="add-input" type="checkbox" id="dinner" name="dinner" defaultChecked={dinner} value={dinner} onChange={handleChange}></input><br></br>
      <label className="add-label" htmlFor="Notes">Website:</label>
      <textarea
        className="add-input"
        id="notes"
        cols="30"
        rows="10"
        onChange={handleChange}
        defaultValue={notes}
        placeholder={notes}>
      </textarea><br></br>
      <label className="add-label" htmlFor="website">Website:</label>
      <input
        className="add-input"
        type="text"
        id="website"
        onChange={handleChange}
        defaultValue={website}
        placeholder={website}/><br></br>
      <label className="add-label" htmlFor="image">Image:</label>
      <input
        className="add-input"
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