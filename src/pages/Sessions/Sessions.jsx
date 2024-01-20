import React, { useState, useEffect } from 'react';
import './Sessions.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';

const Sessions = () => {
  const teamData = localStorage.getItem('Teams');
  const squadNames = JSON.parse(teamData)[0].map(team => team.teamName);
  console.log(squadNames)

  return (
    <div className='sessions'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center mt-10 pageTitle'>Saved Sessions</h1>
      <p className='font-smallText text-center mt-4'>Click on the chosen team to load the schedule</p>

      {/* squad buttons */}
      <div className='w-100 flex justify-center mt-20'>
        {squadNames.map((name, index) => (
          <OutlineBtn key={index} name={name} onClick={() => {}} />
        ))}
      </div>
      
    </div>
  )
}

export default Sessions