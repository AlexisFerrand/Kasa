import PropTypes from 'prop-types'

function Bannierelogement({ pictures, alt, key }) {
  return (
    <div className="Divbannierelogement">
      <img src={pictures} alt={alt} key={key} />
    </div>
  )
}
export default Bannierelogement
