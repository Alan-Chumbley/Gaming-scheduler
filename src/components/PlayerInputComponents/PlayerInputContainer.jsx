import React from 'react'
import PlayerNameInput from './PlayerNameInput'
import PlayerCalendar from './PlayerCalendar'


const PlayerInputContainer = () => {
  return (
    <div className="flex flex-col">
        <PlayerNameInput />
        <PlayerCalendar />
    </div>
  )
}

export default PlayerInputContainer