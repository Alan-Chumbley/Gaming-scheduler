import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";

const GameCard = (props) => {
  return (
    <div className='flex flex-row'>
      <div className='rounded-xl relative'>
          <img src={props.url} alt={props.name} />
          <div className='bg-cyan h-6 absolute inset-x-0 bottom-0'>
              <p className='font-main text-black'>Select</p>
          </div>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-sub text-cyan'>{props.name}</h2>
        <p className='font-smallText text-white'>{props.description}</p>
        <div className='flex flex-row'>
          <button className='font-smallText'>{<FaHeart />} Add to wishlist</button>
          <button><a href={props.website} target='_blank' className='font-smallText'>{<TfiNewWindow />} Read more</a></button>
        </div>
      </div>
    </div>
  )
}

export default GameCard