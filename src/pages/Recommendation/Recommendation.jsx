import React, { useState, useEffect } from 'react';
import axios from "axios";
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {
  const [genreData, setGenreData] = useState(null);
  const [loading, setLoading] = useState(true);

  // calls data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/genres?key=15dc7ef863d140f8b11adec2cc08a02b');
        setGenreData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const genreTitle = localStorage.getItem('CurrentTeam');
  const genreParsed = JSON.parse(genreTitle).genre;
  console.log(genreParsed);

   // Check if genreData and genreData.results exist before accessing them
   if (!genreData || !genreData.results) {
    return <p className='font-sub text-red text-center'>No data available</p>;
  }

  // genres listed
  const adventureGames = genreData.results[2]?.games || [];
  console.log(adventureGames);

  // while the data is load the below will render
  if (loading) {
    return <p className='font-sub text-red text-center'>Loading...</p>;
  }

  return (
    <div className='recommendations'>

      {/* title */}
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      {/* genre cards */}
      <div className='game-cards-container'>
        {adventureGames.map((game) => (
          <GameCard
            key={game.id}
            url={game.url}
            name={game.name}
            description={game.description}
            website={game.website}
          />
        ))}
      </div>

      
      
    </div>
  )
}

export default Recommendation