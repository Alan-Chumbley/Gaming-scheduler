import React from "react";

const PlayerNameInput = () => {
    return (
        <div className="flex mx-20 pl-40 my-10">
            <h1 className="font-main text-5xl text-nowrap uppercase">
                Player 1 Name
            </h1>
            <input
                type="text"
                className="ml-14 h-100"
                value={name}
                placeholder="E.G. Tony Stark"
            />
        </div>
    );
};

export default PlayerNameInput;
