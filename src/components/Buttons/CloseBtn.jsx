import React from 'react';
import './Buttons.css';
import { FaTimes } from 'react-icons/fa';

const CloseBtn = (props) => {

    return (
        <button className='text-2xl md:text-3xl z-10 close-btn' onClick={props.onClick} id={props.id}>
           <FaTimes id='fa-times-icon' /> {props.name}
        </button>
    )
}

export default CloseBtn;