import React from 'react';
import './Home.css';
import EntryForm from './EntryForm';
import Logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div className="flex">
        <div className="w-1/2 p-20">
        <img src={Logo} alt='GameSync logo' />
        <h3 className="pb-10 uppercase text-xl">Game Session Scheduler</h3>
        <p>Effortless gaming with friends. Simply choose your preferred games, input your weekly availability, and let us work our magic to craft a personalized schedule, not only streamlining your gaming sessions with friends but also providing estimated play durations, ensuring you make the most of your time conquering virtual realms together.</p>
        </div>
        <div className="w-1/2 p-20 button-container"><EntryForm /></div>
    </div>
  )
}

export default Home