import { Routes, Route } from 'react-router-dom'
import Header from '../../resrecs_frontend/src/Components/Header'
import './App.css'
import TheRules from '../../resrecs_frontend/src/pages/TheRules'
import Home from '../../resrecs_frontend/src/pages/Home'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therules" element={<TheRules />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
