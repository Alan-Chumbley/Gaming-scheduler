import React from "react";

const DayRow = (props) => {
    return (
        <div className="flex mx-20 mt-4">
            <div className="min-w-40">
                <h2 className="font-sub">{props.day}</h2>
            </div>
            <div className="flex w-full justify-between">
                <h2 className="font-sub">1 </h2>
                <h2 className="font-sub">2 </h2>
                <h2 className="font-sub">3 </h2>
                <h2 className="font-sub">4 </h2>
                <h2 className="font-sub">5 </h2>
                <h2 className="font-sub">6 </h2>
                <h2 className="font-sub">7 </h2>
                <h2 className="font-sub">8 </h2>
                <h2 className="font-sub">9 </h2>
                <h2 className="font-sub">10</h2>
                <h2 className="font-sub">11</h2>
                <h2 className="font-sub">12</h2>
                <h2 className="font-sub">13</h2>
                <h2 className="font-sub">14</h2>
                <h2 className="font-sub">15</h2>
                <h2 className="font-sub">16</h2>
                <h2 className="font-sub">17</h2>
                <h2 className="font-sub">18</h2>
                <h2 className="font-sub">19</h2>
                <h2 className="font-sub">20</h2>
                <h2 className="font-sub">21</h2>
                <h2 className="font-sub">22</h2>
                <h2 className="font-sub">23</h2>
                <h2 className="font-sub">24</h2>
            </div>
        </div>
    );
};

export default DayRow;
