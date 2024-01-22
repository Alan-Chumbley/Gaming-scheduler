import React from "react";
import HourRow from "./HourRow";
import DayRow from "./DayRow";

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const dayRows = days.map((day) => <DayRow day={day} key={day} />);

const PlayerCalendar = () => {
    return (
        <>
            <div className="pl-0 items-center my-10 md:my-5 md:items-left md:pl-40">
                <h2
                    id="calendar-header"
                    className="text-center md:text-left font-sub text-white uppercase pb-1"
                >
                    Select Your Availability
                </h2>
                <p className="text-center md:text-left text-smallText text-sm">
                    Choose your available hours by selecting each time slot
                    individually, or simplify the process by clicking on the
                    day's name to toggle all hours at once
                </p>
            </div>
            <HourRow classList="flex mx-20 ml-60 mt-4 mb-2 justify-between"/>
            {dayRows}
        </>
    );
};

export default PlayerCalendar;
