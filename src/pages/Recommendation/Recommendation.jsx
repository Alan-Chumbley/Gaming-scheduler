import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem';
{/*import leanne card.css */}
const Recommendation = () => {
  
    return (
      <div className='Recommendations'>
  
        {/* background overlay */}
        <div className='overlay'></div>
  
        {/* content */}
        <h1 className='font-main text-red text-center mt-10 pageTitle'>{genre} Games Recommendations</h1>
        
  
        {/* squad buttons */}
        <div>
  
        </div>
        {/* Recommendations list */}
        <div className='recommendationList'>
          {/*retrieve name and image */}
          <RecommendationItem name="recommendation 1" image={}

        </div>

        </div>
    )
  }

export default Recommendation