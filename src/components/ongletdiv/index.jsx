import { useState } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../../styles/ongletdiv/index.css'

const OngletDiv = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="DivOnglet" onClick={() => setOpen(!open)}>
      <div className="DivTitre">
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={open ? faAngleUp : faAngleDown}
          className="fontarrowapropos"
        />
      </div>
      <div
        className="DivText"
        style={open ? { height: 'auto' } : { height: '0px' }}
      >
        <div className="DivTextContent">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default OngletDiv
