import React from "react";
import PlayerNameInput from "./PlayerNameInput";
import PlayerCalendar from "./PlayerCalendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerInputContainer = (props) => {
    //** Variables **//
    const [playerName, setPlayerName] = useState("");
    const navigate = useNavigate();
    let storedPlayers = JSON.parse(localStorage.getItem("Players")) || [];

    //** Save to Local Storage Function **/
    const saveToLS = (data) => {
        storedPlayers.push(data);
        localStorage.setItem("Players", JSON.stringify(storedPlayers));
    };

    //** Handler Functions **/
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    };

    const handleAddPlayer = () => {
        const dayRowArray = [
            "#MondayRow",
            "#TuesdayRow",
            "#WednesdayRow",
            "#ThursdayRow",
            "#FridayRow",
            "#SaturdayRow",
            "#SundayRow",
        ];
        const playerAvailability = [];

        // Loops through each row and each hour to check for toggled timeslots and stores into playerAvailability Array.
        for (let j = 0; j < dayRowArray.length; j++) {
            const Row = document.querySelector(dayRowArray[j]);
            for (let i = 0; i < Row.children.length; i++) {
                const button = Row.children[i];
                if (button.classList.contains("active")) {
                    playerAvailability.push(button.id);
                }
            }
        }

        if (playerName === "") {
            console.log("no name");
            return
        } else if (playerAvailability.length === 0) {
            console.log("no avail time");
            return
        }

        const playerData = {
            name: playerName,
            availability: playerAvailability,
        };

        saveToLS(playerData);
        console.log('saved');
        navigate(props.navigate)
    };

    //** Render components **/
    return (
        <div className="flex flex-col">
            <PlayerNameInput
                handleInputChange={handleInputChange}
                value={playerName}
                playerNum={props.playerNum}
            />
            <PlayerCalendar />
            <button
                className="self-end text-black uppercase rounded-full border-cyan outline-2 bg-cyan/70 mx-20 mt-5 px-5 py-1 flex hover:bg-cyan/100 actionBtn"
                onClick={handleAddPlayer}
            >
                {props.button}
            </button>
        </div>
    );
};

export default PlayerInputContainer;
