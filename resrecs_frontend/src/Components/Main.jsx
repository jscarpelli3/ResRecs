import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import TheRules from '../pages/TheRules'
import AddRest from './AddRest'
import QuickSearch from './QuickSearch'
import RestDetails from './RestDetails'


const Main = () => {
  return (
    <div className="main">
      <QuickSearch />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therules" element={<TheRules />} />
        <Route path="/add" element={<AddRest />} />
        <Route path="/restaurants/:id" element={<RestDetails />} />
        <Route path="/update" element={<updateRest />} />
      </Routes>
      </div>
    </div>
  )
}

export default Main