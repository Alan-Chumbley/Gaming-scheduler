import React from 'react';
import './SummaryCard.css';

const SummaryCard = (props) => {
  return (
    <div className='flex justify-center items-center'>
        <img src={props.imageUrl} alt={props.name + ", the selected game's cover"} className='rounded-full bg-no-repeat bg-cover bg-center game-cover'/>
    </div>
  )
}

export default SummaryCard