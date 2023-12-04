import React from 'react'
import './button.css'

function Button({ btnStyle, btnText, btnLink, download }) {
  return (
    <button className={`btn ${btnStyle}`}>
      {btnLink.indexOf('#') !== -1 ?
        <a href={btnLink} download={download}>{btnText}</a> :
        <a href={btnLink} download={download} target='_blank' >{btnText}</a>}
    </button>
  )
}

export default Button
