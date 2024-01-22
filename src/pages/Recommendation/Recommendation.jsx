{/* import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import './Recommendation.css'; // Import your CSS file

const Recommendation = () => {
  const storedTeams = JSON.parse(localStorage.getItem('Teams'));
  const lastGenre = storedTeams[storedTeams.length-1]['genre'];
  // set state for game info
  const [data, setData] = useState({});

  // load once when on page
  useEffect(() => {
    // got some help for this bit 
    const recData = async () => {
      try {
        // may have to consult kane for games/link/artwork/example
        const response = await fetch('https://api.igdb.com/v4/games');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    recData();
  }, []); //nothing to run so it only commences on load -one time. 

  return (
    // same styling as other pages
    <div className='Recommendations'>
      <h1 className='font-main text-red text-center mt-10 pageTitle'>
        Your Genre Games Recommendations
      </h1>
      <div className='overlay'></div>
      <div>
       {/**data coming from RecommendSearch but is still needing to be linked */}
          // <>
          //   {/*attach game image to gamecard */}
          //   <GameCard url={data.image} />
          //   <div>
          //     {/* add summary and game title */}
          //     <h2>{data.title}</h2>
          //     <p>{data.text}</p>
          //   </div>
          // </>
    
//       </div>
//     </div>
//   );
// };

// export default Recommendation;