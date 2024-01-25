import React from "react";
import "./Home.css";
import EntryForm from "./EntryForm";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className="main-container flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-10 md:p-20 hero-container">
        <img src={Logo} alt='GameSync logo' />
        <h3 className="pl-5 text-sm md:pl-1 lg:text-base pb-10 uppercase">Game Session Scheduler</h3>
        <p className="text-center md:text-left">Effortless gaming with friends. Simply choose your preferred games, input your weekly availability, and let us work our magic to craft a personalized schedule, not only streamlining your gaming sessions with friends but also providing estimated play durations, ensuring you make the most of your time conquering virtual realms together.</p>
      </div>
      <div className="w-full px-10 md:px-20 lg:w-1/2 lg:p-20 button-container"><EntryForm /></div>
    </div>
  )
}

export default Home;