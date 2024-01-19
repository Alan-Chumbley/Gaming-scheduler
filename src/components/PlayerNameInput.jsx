import React from "react";

const PlayerNameInput = () => {
    return (
        <div className="flex bg-red">
            <h1 className="font-main text-4xl ml-40">PLAYER 1 NAME</h1>
            <form className="pl-14 flex">
                <input type="text" placeholder="John Doe"/>
            </form>
        </div>
    );
};

export default PlayerNameInput;
