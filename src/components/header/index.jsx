import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'
import logo from '../../assets/LOGO.svg'
import colors from '../../colors'

const ParamHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 30px;
  font-size: 18px;
  color: ${colors.primary};
`

const ParamLink = styled.div``

function Header() {
  return (
    <ParamHeader>
      <div>
        <img src={logo} alt="Logo kasa" />
      </div>
      <ParamLink>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
      </ParamLink>
    </ParamHeader>
  )
}

export default Header
