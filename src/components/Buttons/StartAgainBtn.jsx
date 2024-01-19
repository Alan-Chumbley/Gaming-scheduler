import React from 'react'
import { BiRefresh } from "react-icons/bi";

const StartAgainBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-transparent'  onClick={props.onClick}>
        {<BiRefresh />}{props.name}
    </button>
  )
}

export default StartAgainBtn