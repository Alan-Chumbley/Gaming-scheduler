import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import './Recommendation.css'; // Import your CSS file
import { RecommendSearch } from './RecommendSearch'; 
import EntryForm from '../Home/EntryForm';

const Recommendation = () => {
  let [gameLibrary, setgameLibrary] = useState([]);
 //nothing to run so it only commences on load -one time. 
useEffect(() => {
  RecommendSearch(EntryForm.genre).then((data)=> {
    gameLibrary = []
    setgameLibrary(gameLibrary) // INPUT
    // console.log("Jung Spongebob",data.results);
    gameLibrary.push(...data.results)
    setgameLibrary(...data.results)
    console.log("game library" ,gameLibrary)
  })
   
}, [])



  return (
    // same styling as other pages
    <div className='Recommendations'>
    {/* map through gameLibrary data and produce gamecard */}
          
          {gameLibrary.map((game) => {
            {/* refer back to gameCard and pass through props? */}
<GameCard key ={game.slug} url={game.background_image} name={game.name} />


})}
                
      </div>

  );
};

export default Recommendation;

//https://api.rawg.io/api/games/28?key=15dc7ef863d140f8b11adec2cc08a02b