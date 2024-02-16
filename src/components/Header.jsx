import { Link } from 'react-router-dom'
import logo from '../assets/kasa.png'
import '../style/header.scss'

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo kasa" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
