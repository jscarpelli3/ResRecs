import axios from 'axios'
import { useState, useEffect } from 'react'

const Login = ({userName, userId, pass}) => {
  const initLogin = {username: '', pass: ''}
  const [loginInfo, setLoginInfo]=useState(initLogin)

  
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const userRecord = await axios.get(`http://localhost:3001/api/validate/${loginInfo.username}`)
    const response = userRecord.data.upUser
    if (response[0].pass===loginInfo.pass) {
      console.log('the password is equal')
      userName=response[0].username
      pass=response[0].pass
      userId=response[0]._id
      setLoginInfo(initLogin)
    } else {
      console.log('password does not match')
    }

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
          id="username"
          defaultValue={loginInfo.username}
          placeholder="username"
          onChange={handleChange}
          ></input>
        <input
          type="pass"
          id="pass"
          defaultValue={loginInfo.pass}
          placeholder="password"
          onChange={handleChange}
          ></input>
          <button className="login-submit" type="submit">Login</button>
          
    </form>
    </div>
  )
}

export default Login