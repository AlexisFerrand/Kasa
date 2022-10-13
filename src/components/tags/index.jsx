import React from 'react'
import '../../styles/tags/index.css'

const Tags = ({ getTags }) => {
  return (
    <div className="tags">
      <p className="tags">{getTags}</p>
    </div>
  )
}

export default Tags
