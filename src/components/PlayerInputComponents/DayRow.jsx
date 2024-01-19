import React from "react";
import TimeSlotButton from "./TimeSlotButton";

const DayRow = (props) => {
    const hours = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
    ];

    // const TimeSlotButtons = hours.map((hour) => <TimeSlotButton/>);

    return (
        <div className="flex mx-20 mt-2">
            <div className="min-w-40">
                <h2 className="font-sub uppercase">{props.day}</h2>
            </div>
            <div className="flex w-full justify-between">
                {hours.map((hour) => (
                    <TimeSlotButton
                        id={props.day + hour}
                        key={props.day + hour}
                    />
                ))}
            </div>
        </div>
    );
};

export default DayRow;
