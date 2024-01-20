
import './Recommendation.css'
import RecommendationItem from './RecommendationItem';
import React, {useState} from 'react';
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {
  const [similar, setsimilar] = useState(id : )
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
          
          {/*GameCard add  */}
          
        <GameCard />

          {/*loop through andretrieve name and image  using map. TO DO: from Rec auto gather api info. need API */}
          {/* {RecAuto.map((recommend) => {
            return 
            <RecommendationItem name={recommend.name} image={PromiseRejectionEvent.image} />
            })} */}

        </div>

        </div>
    )
  }

export default Recommendation