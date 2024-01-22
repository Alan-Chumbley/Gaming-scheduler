import React from 'react';
import './Buttons.css';
import { BiRefresh } from "react-icons/bi";

const StartAgainBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-transparent startBtn'  onClick={props.onClick} id={props.id}>
        {<BiRefresh />}{props.name}
    </button>
  )
}

export default StartAgainBtn