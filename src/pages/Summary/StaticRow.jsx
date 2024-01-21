import React from 'react'
import TimeSlotButton from '../../components/PlayerInputComponents/TimeSlotButton'


const StaticRow = (props) => {

    const hours = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
    ];

    const handleToggle = (e) => {
        console.log(e.target.id);
        let selectedButton = document.querySelector(`#${e.target.id}`);
        if (selectedButton.classList.contains("inactive")) {
            selectedButton.setAttribute(
                "class",
                "bg-cyan w-5 h-5 rounded-md hover:bg-red active"
            );
        } else {
            selectedButton.setAttribute(
                "class",
                "bg-red w-5 h-5 rounded-md hover:bg-cyan inactive"
            );
        }
    };

    return (
        <div className="flex mt-2">
            <div className="min-w-14">
                <h2 className="font-sub uppercase">{props.shortenedDay} </h2>
            </div>
            <div className="flex w-full justify-between" id={props.day + "Row"}>
                {hours.map((hour) => (
                    <TimeSlotButton
                        className={"bg-red w-5 h-5 rounded-md hover:bg-cyan inactive"}
                        id={props.day + hour}
                        key={props.day + hour}
                        handleToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    );
}

export default StaticRow