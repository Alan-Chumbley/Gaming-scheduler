import React from "react";
import TimeSlotButton from "./TimeSlotButton";

const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
];

const TimeSlotButtons = hours.map((hour) => <TimeSlotButton />);

const DayRow = (props) => {
    return (
        <div className="flex mx-20 mt-2">
            <div className="min-w-40">
                <h2 className="font-sub uppercase">{props.day}</h2>
            </div>
            <div className="flex w-full justify-between">{TimeSlotButtons}</div>
        </div>
    );
};

export default DayRow;
