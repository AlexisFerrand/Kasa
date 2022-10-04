import logo from '../../assets/LOGO-blanc.svg'
import styled from 'styled-components'

const FooterPart = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  margin-bottom: 0;
  height: 19%;
`
const Img = styled.img`
  height: 70px;
  padding-top: 50px;
  padding-bottom: 40px;
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
