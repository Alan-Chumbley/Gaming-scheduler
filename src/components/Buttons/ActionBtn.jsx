import React from "react";

const ActionBtn = (props) => {
    return (
        <button className="rounded-full border-cyan outline-2 bg-cyan text-black uppercase text-bold">
            {props.name}
        </button>
    );
};

export default ActionBtn;
