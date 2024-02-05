import {Link} from 'react-router-dom'
import './styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_me">About me</Link></li>
             <li>   <Link to="/Contact">Contact</Link></li>
              <li>  <Link to="/Services">Services</Link></li>
              <li>  <Link to="/Works">Works</Link></li>
        </ul>
    </div>
  )
}

export default Navbar