import React from "react";

const TimeSlotButton = (props) => {
    return (
        <button
            className="bg-red w-5 h-5 rounded-md hover:bg-cyan active:bg-cyan"
            id={props.id}
        ></button>
    );
};

export default TimeSlotButton;
