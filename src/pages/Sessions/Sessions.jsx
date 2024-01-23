import React, { useState, useEffect } from 'react';
import './Sessions.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';
import { useNavigate } from "react-router-dom";

const Sessions = () => {
  const navigate = useNavigate()
  const teamData = localStorage.getItem('Teams');
  const teams = JSON.parse(teamData) || [];
  console.log(teams);
  console.log(teams[0].id);

  const retrieveTeamSummary = (e) => {
    const selectedSession = teams[e.target.getAttribute('data-index')];
    localStorage.setItem("CurrentTeam", JSON.stringify(selectedSession))
    navigate('/player1/player2/summary')
  }

  return (
    <div className='sessions'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center mt-10 pageTitle'>Saved Sessions</h1>
      <p className='font-smallText text-center mt-4'>Click on the chosen team to load the schedule</p>

      {/* squad buttons */}
      <div className='w-100 flex flex-col justify-center mt-20'>
        {teams.map((team, index) => (
          <OutlineBtn key={index} id={team.teamName} index={index} name={team.teamName} onClick={retrieveTeamSummary} />
        ))}
      </div>
      
    </div>
  )
}

export default Sessions