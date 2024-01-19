import React from 'react'
import PlayerNameInput from './PlayerNameInput'
import PlayerCalendar from './PlayerCalendar'


const PlayerInputContainer = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12">
        <PlayerNameInput />
        <PlayerCalendar />
    </div>
  )
}

export default PlayerInputContainer