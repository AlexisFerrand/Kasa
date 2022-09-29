import logo from '../../assets/LOGO-blanc.svg'
import styled from 'styled-components'

const FooterPart = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  margin-bottom: 0;
  height: 209px;
`
const Img = styled.img`
  height: 70px;
`

function Footer() {
  return (
    <FooterPart>
      <Img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterPart>
  )
}
export default Footer
