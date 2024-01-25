import React from 'react';
import './Buttons.css';
import { FaTimes } from 'react-icons/fa';

const RemoveBtn = (props) => {

    return (
        <button onClick={props.onClick} id={props.id}>
            <FaTimes id='fa-times-icon' />{props.name}
        </button>
    )
}

export default RemoveBtn;