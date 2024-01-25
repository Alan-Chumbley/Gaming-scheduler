import React from 'react';
import './Buttons.css';

const ModalBtn = (props) => {

    return (
        <button className={`bg-${props.color} text-${props.fontcolor} font-sub uppercase pt-4 pb-3 text-sm md:text-base px-6 rounded shadow outline-none focus:outline-none mr-1 mb-10 md:mb-0 mdl-0 md:ml-3 md:ml-10 remove-btn whitespace-nowrap`} onClick={props.onClick} id={props.id}>
            {props.name}
        </button>
    )
}

export default ModalBtn;