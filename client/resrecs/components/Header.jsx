import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/Login">Login</Link>  
          <Link to="/The Rules">The Rules</Link>  
        </nav>  
      </header>
    )

  }


  export default Header