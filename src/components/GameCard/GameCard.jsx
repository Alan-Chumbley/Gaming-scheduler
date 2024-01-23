import React, { useEffect } from 'react'
import { TfiNewWindow } from "react-icons/tfi";
import './GameCard.css'
import WishlistBtn from '../Buttons/WishlistBtn';
import MoreBtn from '../Buttons/MoreBtn';
import { FaStar } from 'react-icons/fa';

const GameCard = (props) => {
  const [isToggled, setIsToggled] = React.useState(false);

  function handleWishlistClick(e) {
    setIsToggled(prevIsToggled => {
      const newIsToggled = !prevIsToggled;
      e.target.classList.toggle('smallBtn-toggled', newIsToggled);
      return newIsToggled;
    });
  }

  return (
    <div className='flex flex-row gameCard p-10'>
      <div className='rounded-xl relative imgHolder'>
        <img src={props.imageUrl} alt={props.name} className='gameImg' />
        <div className='absolute inset-x-0 bottom-0 select flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center select-icon-container'>
            <FaStar id='fa-star-icon' />
            <p className='font-main text-black select-text'>Select</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col ml-10'>
        <h2 className='font-sub text-cyan text-2xl'>{props.name}</h2>
        <p className='font-smallText text-white mt-4'>{props.description}</p>
        <div className='flex flex-row text-pinkHover mt-4'>
          <WishlistBtn name="Add to Wishlist" id='wishlist-button' onClick={handleWishlistClick} />
          <a href={props.website} target='_blank' className='font-smallText flex text-size pl-5'><MoreBtn name="Read More" /></a>
        </div>
      </div>
    </div>
  )
}

export default GameCard