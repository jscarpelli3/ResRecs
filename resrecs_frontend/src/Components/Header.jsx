import { Link } from 'react-router-dom'
import logo from '../images/rrlogo.png'


const Header = () => {
  return (
    <header>
      <div className="logo"><Link to="/"><img className="logo" alt="logo" src={logo}></img></Link></div>
        <div className='home'><Link to="/">Home</Link></div>
        <div className='rules'><Link to="/therules">The Rules</Link></div>
        <div className='add'><Link to="/add">Add Restaurant</Link></div>
    </header>
  )
}

export default Header
