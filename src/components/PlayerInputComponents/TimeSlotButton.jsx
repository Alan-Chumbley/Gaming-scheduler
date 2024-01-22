import React from "react";

const TimeSlotButton = (props) => {
    return (
        <button
            className={props.className}
            id={props.id}
            onClick={props.handleToggle}
            hour={props.hour}
        >{props.hour}</button>
    );
};

export default TimeSlotButton;
