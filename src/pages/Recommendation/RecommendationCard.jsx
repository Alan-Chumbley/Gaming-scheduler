import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import './Recommendation.css'; // Import your CSS file
import { RecommendSearch } from './RecommendSearch'; 

const Recommendation = () => {
  let [gameLibrary, setgameLibrary] = useState([]);
 //nothing to run so it only commences on load -one time. 
useEffect(() => {
  RecommendSearch('shooter').then((data)=> {
    gameLibrary = []
    setgameLibrary(gameLibrary)
    // console.log("Jung Spongebob",data.results);
    gameLibrary.push(...data.results)
    setgameLibrary(...data.results)
    console.log("game librayr here" ,gameLibrary)
  })
   
}, [])



  return (
    // same styling as other pages
    <div className='Recommendations'>
     
      <div>
       {/**data coming from RecommendSearch but is still needing to be linked */}
          <>
          {gameLibrary.map((game) => {
            return (
<h1>{game.name} </h1>
              
            )
            
})}
            {/* <div className='card'> */}
              {/* add summary and game title */}
              {/* <h2 className='recTitle' >{RecommendSearch.name}</h2> */}
                {/*attach game image to gamecard */}
            {/* <GameCard image={RecommendSearch.background_image} />
              <p className='overview'>{data.text}</p>
            </div> */}
          </>

    
      </div>
    </div>
  );
};

export default Recommendation;