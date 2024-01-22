import React, { useEffect } from "react";
import "./Summary.css";
import SummaryCal from "./SummaryCal";
import { FaHeart } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { Link } from "react-router-dom";
import tlou from "../../assets/tlou.jpg"
import SaveBtn from "../../components/Buttons/SaveBtn";
import StartAgainBtn from "../../components/Buttons/StartAgainBtn";

const Summary = () => {
    let storedData = JSON.parse(localStorage.getItem("Teams")) || [];
    const currentTeam = JSON.parse(localStorage.getItem("CurrentTeam"));
    const sharedDates = currentTeam.player1.availability.filter((date) =>
        currentTeam.player2.availability.includes(date)
    );

    //** Toggles time slots that overlap with player 1 and 2 */
    useEffect(() => {
        for (let i = 0; i < sharedDates.length; i++) {
            const selectTimeSlot = document.querySelector("#" + sharedDates[i]);
            selectTimeSlot.setAttribute(
                "class",
                "bg-cyan w-5 h-5 rounded-md active cursor-default"
            );
        }
    }, []);

    //** Aleks's local storage code to save a session under "Teams" to local storage */
    function saveToLS(e) {
        storedData.push(currentTeam);
        localStorage.setItem("Teams", JSON.stringify(storedData));
        e.target.setAttribute('disabled', true)
        const sessionMsg = document.querySelector('#session-msg')
        sessionMsg.classList.remove('hidden')
    }

    //** Renders components */
    return (
        <div className="main-container flex flex-col md:flex-row md:mt-5">
            <div className="md:pl-10 image-container my-10">
                <img className="bg-no-repeat bg-cover bg-center game-cover" src={tlou} alt={currentTeam.game + ", the selected game's cover"} />
            </div>
            <div className="sm:p-12 md:w-9/12 lg:w-8/12 lg:flex-col">
                <h1 className="font-main text-6xl text-cyan pb-3">
                    {currentTeam.teamName}
                </h1>
                <h2 className="font-main text-4xl text-white pb-3">
                    Your optimal gaming schedule for {currentTeam.game} is set!
                </h2>
                <p className="pb-6">
                    Stick to the schedule and you'll conquer <span className="text-cyan">{currentTeam.game}</span> in <span className="text-cyan">X weeks</span>!
                </p>
                <SummaryCal />
                <div className="w-full flex justify-end mt-10">
                    <div id="button-msg">
                    <SaveBtn name="Save Session" onClick={saveToLS} />
                    <p className="text-smallText text-center text-cyan mt-2 hidden" id="session-msg">Session Saved!</p>
                    </div>
                    <Link to="/">
                        <StartAgainBtn name="Start Again" />
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Summary;
