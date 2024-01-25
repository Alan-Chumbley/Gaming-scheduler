import React, { useState, useEffect } from "react";
import "./Summary.css";
import SummaryCal from "./SummaryCal";
import { Link } from "react-router-dom";
import tlou from "../../assets/tlou.jpg"
import SaveBtn from "../../components/Buttons/SaveBtn";
import StartAgainBtn from "../../components/Buttons/StartAgainBtn";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import axios from 'axios';
import noImage from '../../assets/no-image.png';



const Summary = () => {
    const [detailedGameData, setDetailedGameData] = useState({});
    const vKEY = import.meta.env.VITE_OUR_API ;
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
                "bg-cyan w-5 h-5 rounded-md active cursor-default active-checkbox"
            );
        }
    }, []);

    const gameNameDetail = currentTeam.game;

    // call this function once to prevent an infinite loop
    useEffect(() => {
        let gameNameDetail = ""
        if (currentTeam.slug !== undefined) {
            gameNameDetail = currentTeam.slug
        } else {
            gameNameDetail = currentTeam.game.replace(/\s+/g, '-').toLowerCase();
        }
        console.log(gameNameDetail)
        fetchGamePhoto(gameNameDetail);
    }, []);

    //** Aleks's local storage code to save a session under "Teams" to local storage */
    function saveToLS(e) {
        let isSaved = false;
        for (let i = 0; i < storedData.length; i++) {
            if (currentTeam.teamName == storedData[i].teamName && currentTeam.player1.name == storedData[i].player1.name && currentTeam.player2.name == storedData[i].player2.name) {
                isSaved = true
            }        
        }

        if (!isSaved) {
            storedData.push(currentTeam);
            localStorage.setItem("Teams", JSON.stringify(storedData));
        }

        e.target.setAttribute('disabled', true)
        const sessionMsg = document.querySelector('#session-msg')
        sessionMsg.classList.remove('hidden')
    }

    /*
        Passing through the gameName into the API call, we will object destructure
        the response data for the background image. We then want to make a copy
        of the previous data and set the state to setDetailedGamesData, with the
        gameName being the key.
    */
    const fetchGamePhoto = async (gameName) => {
        try {
        const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.rawg.io/api/games/${gameName}?key=${vKEY}`);
        const { background_image } = response.data; // Destructure game cover image
        console.log(response.data)
        // console.log(background_image);
        
        // setDetailedGameData((prevData) => ({
        //     ...prevData,
        //     [gameName]: { background_image }, // Store all details in an object
        // }));
        // console.log(detailedGameData);
        if (background_image !== undefined) {
            const summaryIMG = document.querySelector('#summary-img')
            summaryIMG.setAttribute('src', background_image) 
        }

        } catch (error) {
        console.error('Error fetching game details:', error);
        }
    };

    //** Renders components */

    return (
        <div className="main-container flex flex-col lg:flex-row">
            <div className="w-full sm:py-12 lg:w-4/12 p-5 lg:py-20 lg:px-0 image-container">
                {/* <img className="bg-no-repeat bg-cover bg-center game-cover" src={tlou} alt={currentTeam.game + ", the selected game's cover"} /> */}
                <SummaryCard imageUrl={noImage} alt={gameNameDetail}/>
            </div>
            {/* w-full sm:p-12 md:w-1/2 p-5 lg:p-20 button-container */}
            {/* <div className="sm:p-12 md:w-9/12 lg:w-8/12 lg:flex-col"> */}
            <div className="w-full md:mx-30 py-12 lg:w-8/12 p-5 lg:py-20 lg:pl-20 lg:pr-10">
                <h1 className="font-main text-6xl text-cyan pb-3">
                    {currentTeam.teamName}
                </h1>
                <h2 className="font-main text-4xl text-white pb-3">
                    {sharedDates.length < 1 ? `Alert! Your gaming schedules are not aligning, leaving "${currentTeam.game}" in limbo.` : `Your optimal gaming schedule for ${currentTeam.game} is set!`}
                </h2>
                {sharedDates.length < 1 ? <p className="pb-6">Click <span className="text-cyan">'START AGAIN'</span> to sync up those calendars and get back to gaming together!` </p> : <p className="pb-6">Stick to the schedule and you'll conquer <span className="text-cyan">{currentTeam.game}</span> in <span className="text-cyan">X weeks</span>!</p>}
                <SummaryCal />
                <div className="flex flex-row justify-end w-full mt-10">
                    <div id="button-msg" className="mb-5 md:mb-0">
                    <SaveBtn id="session-btn" name="Save Session" onClick={saveToLS} />
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