import React from "react";
import Summary from "./Summary";
const sharedHours = sharedDates.length;

const summerize = (sharedHours)=> {
    const hoursPerD = sharedHours;
    const daysPerW = 7;
    //round to nearest  whole number
    const estimateFinish = Math.round(sharedHours/ ( hoursPerD * daysPW))
    return estimateFinish;
}
console.log ("Total Hours to complete this# ", summerize())

export default summerize;
