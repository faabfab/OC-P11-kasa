import { Link } from 'react-router-dom'
import logo from '../assets/kasa.png'
import '../style/header.scss'

function Header() {
  const ddd = window.location.href
  console.log(ddd)

  return (
    <nav>
      <img src={logo} alt="logo kasa" />
      <ul>
        <li>
          <Link to="/" className="underline">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
