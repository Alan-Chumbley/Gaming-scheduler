import React from 'react';
import './Buttons.css';
import { FaHeart } from "react-icons/fa";

const WishlistBtn = (props) => {

    return (
        <button className='font-smallText flex text-size whitespace-nowrap wishlistBtn' onClick={props.onClick} id={props.id}>
            <FaHeart id='fa-heart-solid-icon' />{props.name}
        </button>
    )
}

export default WishlistBtn;