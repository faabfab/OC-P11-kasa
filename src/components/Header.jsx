import { Link } from 'react-router-dom'
import logo from '../assets/kasa.png'
import '../style/header.scss'
import { useState } from 'react'

function Header() {
  const [style, setStyle] = useState('underlined')
  const [style2, setStyle2] = useState('not-underlined')

  console.log(typeof style)

  const changeStyle = () => {
    if (style === 'underlined' && style2 === 'not-underlined') {
      setStyle('not-underlined')
      setStyle2('underlined')
    }
    if (style === 'not-underlined' && style2 === 'underlined') {
      setStyle('underlined')
      setStyle2('not-underlined')
    }
  }

  return (
    <nav>
      <img src={logo} alt="logo kasa" />
      <ul>
        <li>
          <Link to="/" className={style} onClick={changeStyle}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={style2} onClick={changeStyle}>
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
