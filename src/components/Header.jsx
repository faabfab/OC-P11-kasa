import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/kasa.png'
import '../style/header.scss'

function Header() {
  const location = useLocation()
  const { pathname } = location

  let style = ''
  let style2 = ''
  switch (pathname) {
    case '/':
      style = 'underlined'
      style2 = 'not-underlined'
      break
    case '/about':
      style = 'not-underlined'
      style2 = 'underlined'
      break

    default:
      style = 'not-underlined'
      style2 = 'not-underlined'
      break
  }

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo kasa" />
      </Link>
      <ul>
        <li>
          <Link to="/" className={style}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={style2}>
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
