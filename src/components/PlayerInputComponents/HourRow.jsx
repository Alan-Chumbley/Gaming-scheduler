import React from "react";
const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
];

const hourHeaders = hours.map((hour) => (
    <div className="hidden md:block w-5 h-5 text-center" key={hour}>
        <h2 className="font-sub">{hour}</h2>
    </div>
));

const HourRow = () => {
    return (
        <div className="flex ml-40 mt-4 mb-2 justify-between">
            {hourHeaders}
        </div>
    );
};

export default HourRow;
