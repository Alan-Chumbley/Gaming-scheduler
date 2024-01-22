import React from "react";

const PlayerNameInput = (props) => {
    return (
        <div className='flex sm:flex-col sm:items-center sm:px-0 md:flex-row p-20'>

            <div className="sm:pb-10 md:pb-0">
                <h1 className="font-main text-5xl text-nowrap uppercase whitespace-nowrap">
                    {props.playerNum}
                </h1>
            </div>

            <div className="w-full ml-14 mt-1">
                <input
                    type="text"
                    className="w-full h-100 right-0"
                    value={props.playerName}
                    onChange={props.handleInputChange}
                    placeholder="E.G. Tony Stark"
                />
            </div>

        </div>

    );
};

export default PlayerNameInput;
