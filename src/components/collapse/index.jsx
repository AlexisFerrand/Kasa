import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Collapse = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="barre" onClick={() => setOpen(!open)}>
      <div className="title">
        <h2>{props.title}</h2>
        <FontAwesomeIcon
          icon={open ? faAngleUp : faAngleDown}
          className="fontarrowfichelogement"
        />
      </div>
      <div
        className="description"
        style={open ? { height: 'auto' } : { height: '0px' }}
      >
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default Collapse
