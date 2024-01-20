import React from 'react'
import GameCard from '../../components/GameCard/GameCard';

function RecommendationItem({image,name}) {
  return (
    <div className='recommendationItem'>
        
        <div style={{GameCard: `url(${image})`}} className='gameCover' />
        <h1> {name}</h1>

        
        
         </div>
  )
}

export default RecommendationItem;