import React from "react";
import PlayerNameInput from "./PlayerNameInput";
import PlayerCalendar from "./PlayerCalendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerInputContainer = (props) => {
    //** Variables **//
    // localStorage.clear()
    const [playerName, setPlayerName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    let storedPlayers = JSON.parse(localStorage.getItem("Players")) || [];
    let currentTeam = JSON.parse(localStorage.getItem("CurrentTeam"))

    //** Save to Local Storage Function **/
    const saveToLS = (data) => {
        storedPlayers.push(data);
        localStorage.setItem("Players", JSON.stringify(storedPlayers));

        const playerNum = "player"+props.playerNum
        currentTeam[playerNum] = data
        console.log(currentTeam);
        localStorage.setItem("CurrentTeam", JSON.stringify(currentTeam))
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
            setErrorMsg('Level up by entering a player name!');
            displayError();
            return
        } else if (playerAvailability.length === 0) {
            console.log("no avail time");
            setErrorMsg('Set an availability to continue!');
            displayError();
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

    const displayError = () => {
        document.querySelector('#error-msg-pl').removeAttribute('hidden');
    };


    //** Render components **/
    return (
        <div className="flex flex-col mx-10 md:mx-30 lg:mx-40">
            <PlayerNameInput id='player-name-input'
                handleInputChange={handleInputChange}
                value={playerName}
                playerNum={'Player ' + props.playerNum}
            />
            <PlayerCalendar />
            <div className='flex flex-col items-center self-end mt-0 lg:mt-5'>
                <button
                    className="uppercase rounded-full border-cyan outline-2 bg-cyan/70 mx-0 text-sm md:text-lg mt-5 px-5 py-1 flex hover:bg-cyan/100 actionBtn"
                    onClick={handleAddPlayer}
                >
                    {props.button}
                </button>
                <div className="flex flex-col items-center">
                    <p id='error-msg-pl' className='italic'>{errorMsg}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerInputContainer;
