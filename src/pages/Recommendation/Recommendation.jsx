import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {
  const [genreData, setGenreData] = useState(null); // finding and setting the genre
  const [detailedGameData, setDetailedGameData] = useState({}); // retrieving the detailed game data from second get request
  const [loading, setLoading] = useState(true); // if the data takes too long to load then display a loading message

  // this call will run once and retrieve the data from RAWG API
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

  /*
    Passing through the gameID into the second API call, we will object destructure
    the response data for the background image, description and website url.
    We then want to make a copy of the previous data and set the state to
    setDetailedGamesData, with the gameID being the key.
  */
  const fetchGameDetails = async (gameId) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=15dc7ef863d140f8b11adec2cc08a02b`);
      const { background_image, description, website } = response.data; // Destructure additional details
  
      setDetailedGameData((prevData) => ({
        ...prevData,
        [gameId]: { background_image, description, website }, // Store all details in an object
      }));
    } catch (error) {
      console.error('Error fetching game details:', error);
    }
  };

  // retrieving the most recent genre selected from local storage
  const genreTitle = localStorage.getItem('CurrentTeam');
  const genreParsed = JSON.parse(genreTitle).genre;

  // if the genre data from the API is not available, the below message will render
  if (!genreData || !genreData.results) {
    return <p className='font-sub text-red text-center'>No data available</p>;
  }

  // testing this genre
  const adventureGames = genreData.results[2]?.games || [];

  // if the screen takes a while to load the data, the below will render
  if (loading) {
    return <p className='font-sub text-red text-center'>Loading...</p>;
  }

  return (
    <div className='recommendations'>
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>
      
      {/* mapping through each genre's games and their unique IDs are passed through to the second API to get image, description and URL */}
      <div className='game-cards-container'>
        {/* testing adventure genre to see if code works */}
        {adventureGames.map((game) => {
          const gameDetails = detailedGameData[game.id] || {};

          if (!gameDetails.background_image) {

            // If the detailed game data is not available, fetch it
            fetchGameDetails(game.id);
          }

          return (
            <GameCard
              key={game.id}
              id={game.id}
              imageUrl={gameDetails.background_image || ''}
              name={game.name}
              description={gameDetails.description || ''}
              website={gameDetails.website || ''}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;
