import React from "react";
import './Buttons.css';
import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";

const ActionBtn = (props) => {

    function handleHover(e) {
        e.target.children[0].removeAttribute('hidden');
    }

    function handleHoverExit(e) {
        if(!e.target.children[0].hasAttribute('hidden')){
            e.target.children[0].setAttribute('hidden', true);
        }
    }

    return (
        
        <button onMouseEnter={handleHover} onMouseLeave={handleHoverExit}
            className="rounded-full border-cyan outline-2 bg-cyan actionBtn"
            onClick={props.onClick}
            id={props.id}
        >
            {props.name}
            <FaPlay hidden id='fa-play-icon' /> 

        </button>
        
    );
};

export default ActionBtn;
