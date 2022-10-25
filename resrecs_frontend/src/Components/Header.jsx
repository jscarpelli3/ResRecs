import { Link } from 'react-router-dom'
import logo from '../images/rrlogo.png'


const Header = () => {
  return (
    <header>
      <div className="logo"><Link to="/"><img alt="logo" src={logo}></img></Link></div>
        <div className='home'><Link to="/"><p>Home</p></Link></div>
        <div className='rules'><Link to="/therules"><p>The Rules</p></Link></div>
        <div className='add'><Link to="/add"><p>Add Restaurant</p></Link></div>
    </header>
  )
}

export default Header
