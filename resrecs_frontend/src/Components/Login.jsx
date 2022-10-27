import axios from 'axios'
import { useState, useEffect } from 'react'

const Login = ({userName, userId, pass}) => {
  const initLogin = {username: '', pass: ''}
  const [loginInfo, setLoginInfo]=useState(initLogin)

  
  const handleSubmit = (evt) => {
    evt.preventDefault()
  }


  const handleChange = (evt) => {
    setLoginInfo({ ...loginInfo, [evt.target.id]: evt.target.value })
  }


  return (
    <div>
    <h3>Login:</h3>
    <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="username"
          onChange={handleChange}
          ></input>
        <input
          type="pass"
          placeholder="password"
          onChange={handleChange}
          ></input>
          <button type="submit">Login</button>
          
    </form>
    </div>
  )
}

export default Login