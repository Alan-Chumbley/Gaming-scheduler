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
const dayRows = days.map((day) => <DayRow day={day} />);

const PlayerCalendar = () => {
    return (
        <>
            <div className="mx-20 pl-40 mt-5">
                <h2
                    id="calendar-header"
                    className="font-sub text-white uppercase pb-1"
                >
                    Select Your Availability
                </h2>
                <p className="text-smallText text-sm">
                    Choose your available hours by selecting each time slot
                    individually, or simplify the process by clicking on the
                    day's name to toggle all hours at once
                </p>
            </div>
            <HourRow />
            {dayRows}
        </>
    );
};

export default PlayerCalendar;
