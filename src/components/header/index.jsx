import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'
import logo from '../../assets/LOGO.svg'
import colors from '../../colors'

const ParamHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-top: 50px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 30px;
  font-size: 18px;
  color: ${colors.primary};
`
const NavParams = styled.nav`
  padding-top: 35px;
`

function Header() {
  return (
    <ParamHeader>
      <div>
        <img src={logo} alt="Logo kasa" />
      </div>
      <NavParams>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
      </NavParams>
    </ParamHeader>
  )
}

export default Header
