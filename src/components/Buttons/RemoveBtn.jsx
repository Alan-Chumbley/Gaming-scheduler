import React from 'react';
import './Buttons.css';

const RemoveBtn = (props) => {

    return (
        <button className='bg-red active:bg-red font-sub uppercase pt-4 pb-3 text-base px-6 rounded shadow outline-none focus:outline-none mr-1 mb-1 remove-btn' onClick={props.onClick} id={props.id}>
            {props.name}
        </button>
    )
}

export default RemoveBtn;