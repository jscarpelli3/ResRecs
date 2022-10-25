import { Link } from 'react-router-dom'
import logo from '../images/rrlogo.png'


const Header = () => {
  return (
    <header>
      <Link to="/"><img alt="logo" src={logo}></img></Link>
      <nav>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/therules"><h2>The Rules</h2></Link><Link to="/add"><h2>Add Restaurant</h2></Link>
      </nav>
    </header>
  )
}

export default Header
