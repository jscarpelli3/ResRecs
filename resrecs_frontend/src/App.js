import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
import Main from './Components/Main'

const App = () => {
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
