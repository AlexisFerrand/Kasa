import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'
import logo from '../../assets/LOGO.svg'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo kasa" />
      </div>
      <div>
        <Link to="/">Acuueil</Link>
        <Link to="/a-propos">A propos</Link>
      </div>
    </header>
  )
}

export default Header
