import React from 'react';
import './Buttons.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const WishlistBtn = (props) => {

    return (
        <button className='flex text-base whitespace-nowrap moreBtn' onClick={props.onClick} id={props.id}>
            <FaExternalLinkAlt id='fa-link-icon' />{props.name}
        </button>
    )
}

export default WishlistBtn;