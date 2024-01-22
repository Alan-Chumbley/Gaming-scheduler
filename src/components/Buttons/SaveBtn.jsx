import React from 'react'
import { FaHeart } from "react-icons/fa";
import './Buttons.css';

const SaveBtn = (props) => {
  return (
    <button className='bg-transparent border-cyan border-2 rounded-full flex w-fit px-6 p-1 mr-4 uppercase text-cyan text-xl hover:text-black hover:bg-cyan disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-cyan saveBtn'  onClick={props.onClick} id={props.id}>
        {<FaHeart id='fa-heart-icon' />}{props.name}
    </button>
  )
}

export default SaveBtn

