import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'
import logo from '../../assets/LOGO.svg'
import colors from '../../colors'
import '../../styles/header/index.css'
const ParamHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-top: 50px;
  @media screen and (max-width: 480px) {
    padding-top: 25px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 30px;
  font-size: 22px;
  color: ${colors.primary};
  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding-left: 18px;
  }
`
const NavParams = styled.nav``

function Header() {
  return (
    <ParamHeader>
      <div>
        <a href="/">
          <img src={logo} alt="Logo kasa" />
        </a>
      </div>
      <NavParams>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
      </NavParams>
    </ParamHeader>
  )
}

export default Header
