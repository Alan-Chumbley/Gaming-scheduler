import React, { useEffect } from "react";
import "./Summary.css";
import SummaryCal from "./SummaryCal";
import { FaHeart } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { Link } from "react-router-dom";
import tlou from "../../assets/tlou.jpg"

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
        <div className="main-container flex flex-col md:flex-row">
            <div className="w-full sm:p-12 md:w-1/3 p-5 lg:p-20 image-container">
                <img className="w-full bg-no-repeat bg-cover bg-center" src={tlou} alt={currentTeam.game + ", the selected game's cover"} />
            </div>
            <div className="w-full sm:p-12 md:w-2/3 p-5 lg:p-20 lg:pb-10 flex-col">
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
                    <button className="bg-transparent border-cyan border-2 rounded-full flex w-fit px-6 p-1 mr-4 uppercase text-cyan text-xl hover:text-black hover:bg-cyan disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-cyan" onClick={saveToLS}>
                        {<FaHeart className="mr-3 mt-1" />}Save Session
                    </button>
                    <Link to="/">
                    <button className="bg-transparent border-cyan border-2 rounded-full flex w-fit px-6 p-1 uppercase text-cyan text-xl hover:text-black hover:bg-cyan">
                        {<IoMdRefresh className="mr-3 mt-1" />}Start Again
                    </button>
                    </Link> 
                </div>
                <p className="text-smallText text-end text-cyan mt-2 mr-[17rem] hidden" id="session-msg">Session Saved!</p>
            </div>
        </div>
    );
};

export default Summary;
