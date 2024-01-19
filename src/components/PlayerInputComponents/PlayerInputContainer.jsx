import React from "react";
import PlayerNameInput from "./PlayerNameInput";
import PlayerCalendar from "./PlayerCalendar";
import { useState } from "react";

const PlayerInputContainer = () => {
    const [playerName, setPlayerName] = useState();

    const saveToLS = (data) => {
        localStorage.setItem(data.name, JSON.stringify(data));
    };

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
        console.log(playerName);
    };

    const handleAddPlayer = () => {
        console.log(playerName);

        const playerData = {
            name: playerName,
            availability: [],
        };

        saveToLS(playerData);
    };

    return (
        <div className="flex flex-col">
            <PlayerNameInput
                handleInputChange={handleInputChange}
                value={playerName}
            />
            <PlayerCalendar />
            <button
                className="self-end text-black uppercase rounded-full border-cyan outline-2 bg-cyan/70 mx-20 mt-5 px-5 py-1 flex hover:bg-cyan/100"
                onClick={handleAddPlayer}
            >
                Add Player 2
            </button>
        </div>
    );
};

export default PlayerInputContainer;
