import React, { useEffect } from 'react'
import './Summary.css'
import SummaryCal from './SummaryCal'
import { FaHeart } from 'react-icons/fa'
import SaveBtn from '../../components/Buttons/SaveBtn'

const Summary = () => {
  const currentTeam = JSON.parse(localStorage.getItem("CurrentTeam"))
  const sharedDates = currentTeam.player1.availability.filter(date => currentTeam.player2.availability.includes(date));
  console.log(sharedDates);

  useEffect(()=>{
    for (let i = 0; i < sharedDates.length; i++) {
      const selectTimeSlot = document.querySelector("#"+sharedDates[i])
      selectTimeSlot.setAttribute(
        "class",
        "bg-cyan w-5 h-5 rounded-md active cursor-default"
        );
    }
  }, [])

  return (
    <div className="main-container flex flex-col md:flex-row">
    <div className="w-full sm:p-12 md:w-1/3 p-5 lg:p-20 hero-container">
      {/* <img src={Logo} alt='GameSync logo' /> */}
      <h3 className="sm:pl-5 sm:text-sm md:text-sm md:pl-1 lg:text-lg pb-10 uppercase">Game Session Scheduler</h3>
      <p className="text-center md:text-left">Effortless gaming with friends. Simply choose your preferred games, input your weekly availability, and let us work our magic to craft a personalized schedule, not only streamlining your gaming sessions with friends but also providing estimated play durations, ensuring you make the most of your time conquering virtual realms together.</p>
    </div>
    <div className="w-full sm:p-12 md:w-2/3 p-5 lg:p-20 flex-col">
      <h1 className='font-main text-6xl text-cyan pb-3'>{currentTeam.teamName}</h1>
      <h2 className='font-main text-4xl text-white pb-3'>Your optimal gaming schedule for {currentTeam.game} is set!</h2>
      <p className='pb-6'>Stick to the schedule and you'll conquer {currentTeam.game} in X TIME!</p>
      <SummaryCal />
      {/* <button className="bg-transparent border-cyan border-2 rounded-full flex w-fit px-4 p-2 uppercase">{<FaHeart className='mr-3'/>}Save Session</button> */}
      {/* <SaveBtn name="Save Session" id="save-session-btn"/> */}
    </div>
  </div>
  )
}

export default Summary