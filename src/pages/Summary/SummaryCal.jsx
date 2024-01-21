import React from 'react'
import HourRow from '../../components/PlayerInputComponents/HourRow'
import DayRow from '../../components/PlayerInputComponents/DayRow';

const SummaryCal = () => {
    const days = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
    ];
    const dayRows = days.map((day) => <DayRow day={day} key={day} />);
    



  return (
    <div>
        <HourRow classList="flex mt-4 mb-2 justify-between"/>
        {/* {dayRows} */}
    </div>
  )
}

export default SummaryCal