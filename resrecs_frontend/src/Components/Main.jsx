import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import TheRules from '../pages/TheRules'
import AddRest from './AddRest'
import QuickSearch from './QuickSearch'


const Main = () => {
  return (
    <div className="main">
      <QuickSearch />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therules" element={<TheRules />} />
        <Route path="/add" element={<AddRest />} />
      </Routes>
      </div>
    </div>
  )
}

export default Main