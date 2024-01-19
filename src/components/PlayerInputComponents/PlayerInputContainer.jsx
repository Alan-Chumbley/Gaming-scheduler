import React from "react";
import PlayerNameInput from "./PlayerNameInput";
import PlayerCalendar from "./PlayerCalendar";
import ActionBtn from "../Buttons/ActionBtn";

const PlayerInputContainer = () => {
    return (
        <div className="flex flex-col">
            <PlayerNameInput />
            <PlayerCalendar />
            <ActionBtn />
        </div>
    );
};

export default PlayerInputContainer;
