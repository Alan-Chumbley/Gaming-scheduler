import React from "react";

const TimeSlotButton = (props) => {
    return (
        <button
            className={props.className}
            id={props.id}
            onClick={props.handleToggle}
        ></button>
    );
};

export default TimeSlotButton;
