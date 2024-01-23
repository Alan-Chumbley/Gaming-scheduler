import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameCard/GameCard';
import ActionBtn from '../../components/Buttons/ActionBtn';

const Recommendation = () => {
  const [genreData, setGenreData] = useState(null); // finding and setting the genre
  const [detailedGameData, setDetailedGameData] = useState({}); // retrieving the detailed game data from second get request
  const [loading, setLoading] = useState(true); // if the data takes too long to load then display a loading message
  let counter = 0; // for handleSelectClick - to avoid selection of more than one game

  // this call will run once and retrieve the data from RAWG API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.allorigins.win/raw?url=https://api.rawg.io/api/genres?key=0d78e57ce6444308b0caeb836b9cf165');
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
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.rawg.io/api/games/${gameId}?key=0d78e57ce6444308b0caeb836b9cf165`);
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
  console.log(genreData.results)
  const action = genreData.results[0]?.games || []; // safely chain properties
  const indie = genreData.results[1]?.games || [];
  const adventure = genreData.results[2]?.games || [];
  const strategy = genreData.results[4]?.games || [];
  const shooter = genreData.results[5]?.games || [];
  const casual = genreData.results[6]?.games || [];
  const simulation = genreData.results[7]?.games || [];
  const puzzle = genreData.results[8]?.games || [];
  const platform = genreData.results[10]?.games || [];
  const sports = genreData.results[12]?.games || [];
  const racing = genreData.results[13]?.games || [];
  const fighting = genreData.results[14]?.games || [];

  // switch statement to parse through the genre name from local storage
  // which will then display the corresponding games
  let selectedGenre = [];
  switch (genreParsed) {
    case 'action':
      selectedGenre = action;
      break;
    case 'indie':
      selectedGenre = indie;
      break;
    case 'adventure':
      selectedGenre = adventure;
      break;
    case 'strategy':
      selectedGenre = strategy;
      break;
    case 'shooter':
      selectedGenre = shooter;
      break;
    case 'casual':
      selectedGenre = casual;
      break;
    case 'simulation':
      selectedGenre = simulation;
      break;
    case 'puzzle':
      selectedGenre = puzzle;
      break;
    case 'platform':
      selectedGenre = platform;
      break;
    case 'sports':
      selectedGenre = sports;
      break;
    case 'racing':
      selectedGenre = racing;
      break;
    case 'fighting':
      selectedGenre = fighting;
      break;
    default:
      break;
  }

  // if the screen takes a while to load the data, the below will render
  if (loading) {
    return <p className='font-sub text-red text-center'>Loading...</p>;
  }

  // truncate syntax from MDN web docs
  const truncateText = (text, maxLength) => {
    if (text) {
      text = text.replace('<p>', '').replace('</p>', '');
    }
    return text && text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  // handle game selection on click (and not allow selection of more than one)
  function handleSelectClick(e) {
    const gameEl = e.target.parentElement.parentElement.parentElement.children;

    if (counter !== 0 && !e.target.classList.contains('selected-card')) {
      for (let i = 0; i < gameEl.length; i++) {
        let currentGameEl = gameEl[i].children[0].children[1];
        if (currentGameEl.classList.contains('selected-card')) {
          currentGameEl.classList.remove('selected-card');
        }
        e.target.classList.add('selected-card');
        counter++;
      }
    } else if (e.target.classList.contains('selected-card')) {
      console.log('it does');
      e.target.classList.remove('selected-card');
      counter = 0;
    } else {
      e.target.classList.add('selected-card');
      counter++;
    }
  }


  return (
    <div className='recommendations'>
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      {/* mapping through each genre's games and their unique IDs are passed through to the second API to get image, description and URL */}
      <div className='game-cards-container mt-10 grid grid-cols-2'>
        {/* testing adventure genre to see if code works */}
        {selectedGenre.map((game) => {
          const gameDetails = detailedGameData[game.id] || {};
          const truncateDesc = truncateText(gameDetails.description, 250);         

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
              description={truncateDesc || ''}
              website={gameDetails.website || ''}
              onClick={handleSelectClick}
            // isSelected={selectedGameId === game.id}
            />
          );
        })}
      </div>

      <button className='font-sub text-white bg-red rounded-full text-center flex justify-center mx-auto w-96 h-16 text-2xl uppercase items-center px-10 my-10'>Let's schedule</button>
    </div>
  );
};

export default Recommendation;
