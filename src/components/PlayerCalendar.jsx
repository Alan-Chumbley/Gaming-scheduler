import React from 'react'
import HourRow from './HourRow'
import DayRow from './DayRow'

const PlayerCalendar = () => {
  return (
    <>
    <div>
        <h2 className='font-sub'>SELECT YOUR AVAILABILITY</h2>
        <p className='font-smallText'>Choose your available hours by selecting each time slot individually, or simplify the process by clicking on the day's name to toggle all hours at once</p>
    </div>
    <HourRow />
    <DayRow />
    </>
    
  )
}

export default PlayerCalendar