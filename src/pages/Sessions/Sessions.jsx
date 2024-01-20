import React, { useState, useEffect } from 'react';
import './Sessions.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';

const Sessions = () => {
  const teamData = localStorage.getItem('Teams');
  const teams = JSON.parse(teamData) || [];
  console.log(teams);

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
          <OutlineBtn key={index} id={team.id} name={team.teamName} onClick={() => {}} />
        ))}
      </div>
      
    </div>
  )
}

export default Sessions