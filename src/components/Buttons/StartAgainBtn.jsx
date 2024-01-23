import React from 'react';
import './Buttons.css';
import { BiRefresh } from "react-icons/bi";

const StartAgainBtn = (props) => {
  return (
    <button className='bg-transparent border-cyan border-2 rounded-full flex w-fit px-6 p-1 mr-4 uppercase text-cyan text-xl hover:text-black hover:bg-cyan disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-cyan startBtn'  onClick={props.onClick} id={props.id}>
        {<BiRefresh id='fa-refresh-icon' />}{props.name}
    </button>
  )
}

export default StartAgainBtn