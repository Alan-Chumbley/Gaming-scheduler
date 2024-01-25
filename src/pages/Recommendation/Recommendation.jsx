import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameCard/GameCard';
import ActionBtn from '../../components/Buttons/ActionBtn';
import { useNavigate } from 'react-router-dom';

const Recommendation = () => {
  const [genreData, setGenreData] = useState(null); // finding and setting the genre
  const [detailedGameData, setDetailedGameData] = useState({}); // retrieving the detailed game data from second get request
  const [loading, setLoading] = useState(true); // if the data takes too long to load then display a loading message
  // console.log("HELLO : ", genreData)
  let counter = 0; // for handleSelectClick - to avoid selection of more than one game
  let btnName = 'Select';

  //env
  const vKEY = import.meta.env.VITE_OUR_API ;

  //navigate
  const navigate = useNavigate();

  // this call will run once and retrieve the data from RAWG API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${vKEY}`);
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
    the response data for the background image, slug and description.
    We then want to make a copy of the previous data and set the state to
    setDetailedGamesData, with the gameID being the key.
  */
  const fetchGameDetails = async (gameId) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${vKEY}`);
      const { background_image, description, slug } = response.data; // Destructure additional details

      setDetailedGameData((prevData) => ({
        ...prevData,
        [gameId]: { background_image, description, slug }, // Store all details in an object
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
  // console.log(genreData.results)
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
    const clickedEl = e.currentTarget;

    const grandpaEl = clickedEl.parentElement.parentElement.parentElement;
    const gameEl = grandpaEl.querySelectorAll('.gameCard');

    const currentTeam = JSON.parse(localStorage.getItem('CurrentTeam'))

    if (counter !== 0 && !clickedEl.classList.contains('selected-card')) {
      for (let i = 0; i < gameEl.length; i++) {
        let currentGameEl = gameEl[i].children[0].children[1];
        if (currentGameEl.classList.contains('selected-card')) {
          currentGameEl.classList.remove('selected-card');
        }
        clickedEl.classList.add('selected-card');
        counter++;
      }
    } else if (clickedEl.classList.contains('selected-card')) {
      clickedEl.classList.remove('selected-card');
      counter = 0;
    } else {
      clickedEl.classList.add('selected-card');
      counter++;
    }
    const isClickedSelected = clickedEl.classList.contains('selected-card');
    clickedEl.querySelector(`.select-text`).textContent = isClickedSelected ? 'Selected' : 'Select';
    currentTeam.slug = clickedEl.getAttribute('data-slug');
    currentTeam.game = clickedEl.parentElement.parentElement.children[1].children[0].innerHTML
    localStorage.setItem('CurrentTeam', JSON.stringify(currentTeam))
  }

  const linkTo = () => {
    const currentTeam = JSON.parse(localStorage.getItem('CurrentTeam'))
    return !currentTeam.game ? null : navigate('/player1')
  }

  return (
    <div className='recommendations'>
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      {/* mapping through each genre's games and their unique IDs are passed through to the second API to get image, description and URL */}
      <div className='game-cards-container mt-10 block xl:grid grid-cols-2'>
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
              website={`https://rawg.io/games/${gameDetails.slug || ''}`}
              onClick={handleSelectClick}
              slug={gameDetails.slug}
            />
          );
        })}
      </div>

      <button onClick={linkTo} className='font-sub text-white bg-red rounded-full text-center flex justify-center mx-auto w-96 h-16 text-2xl uppercase items-center px-10 my-10'>Let's schedule</button>
    </div>
  );
};

export default Recommendation;