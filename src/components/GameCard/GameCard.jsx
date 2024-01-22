import React from 'react'
// import { RecommendSearch } from '../../pages/Recommendation/RecommendSearch'
const GameCard = (props) => {
  return (
    <div className='rounded-xl relative'>
        <img src={props.url} alt={props.name} />
        <div className='bg-cyan h-6 absolute inset-x-0 bottom-0'>
            <p className='font-main text-black'>Select</p>
        </div>
    </div>
  )
}

export default GameCard