import logo from '../../assets/LOGO-blanc.svg'
import '../../styles/footer/index.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
