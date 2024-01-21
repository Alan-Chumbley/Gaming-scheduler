import React from "react";
import HourRow from "../../components/PlayerInputComponents/HourRow";
import StaticRow from "./StaticRow";

const SummaryCal = () => {
    const days = [
        { short: "Mon", long: "Monday" },
        { short: "Tue", long: "Tuesday" },
        { short: "Wed", long: "Wednesday" },
        { short: "Thu", long: "Thursday" },
        { short: "Fri", long: "Friday" },
        { short: "Sat", long: "Saturday" },
        { short: "Sun", long: "Sunday" },
    ];

    const dayRows = days.map((day) => (
        <StaticRow shortenedDay={day.short} day={day.long} key={day} />
    ));

    return (
        <div>
            <HourRow classList="flex mt-4 mb-4 ml-14 justify-between" />
            {dayRows}
        </div>
    );
};

export default SummaryCal;
