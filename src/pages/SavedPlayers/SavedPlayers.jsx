import React from 'react'
import './SavedPlayers.css'

const SavedPlayers = () => {
  return (
    <div className='players'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center mt-10 pageTitle'>Saved Players</h1>
      <p className='font-smallText text-center mt-4'>Click on the chosen player to load their schedule</p>

      {/* squad buttons */}
      <div>

      </div>
    </div>
  )
}

export default SavedPlayers