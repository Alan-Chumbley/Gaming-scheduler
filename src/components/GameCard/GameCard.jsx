import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import './GameCard.css'

const GameCard = (props) => {
  return (
    <div className='flex flex-row gameCard'>
      <div className='rounded-xl relative imgHolder'>
          <img src={props.imageUrl} alt={props.name} className='gameImg' />
          <div className='bg-cyan h-6 absolute inset-x-0 bottom-0 select flex justify-center items-center'>
              <p className='font-main text-black select-text'>Favourite game</p>
          </div>
      </div>
      <div className='flex flex-col ml-10'>
        <h2 className='font-sub text-cyan text-2xl'>{props.name}</h2>
        <p className='font-smallText text-white'>{props.description}</p>
        <div className='flex flex-row text-pinkHover'>
          <button className='font-smallText'>{<FaHeart />} Add to wishlist</button>
          <button><a href={props.website} target='_blank' className='font-smallText'>{<TfiNewWindow />} Read more</a></button>
        </div>
      </div>
    </div>
  )
}

export default GameCard