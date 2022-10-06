import PropTypes from 'prop-types'

function Bannierelogement({ pictures, alt }) {
  return (
    <div className="Divbannierelogement">
      <img src={pictures} alt={alt} />
    </div>
  )
}
export default Bannierelogement
