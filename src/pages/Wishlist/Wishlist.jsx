import React, { useState, useEffect } from 'react';
import './Wishlist.css'
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const navigate = useNavigate();

  const storedGames = JSON.parse(localStorage.getItem('Wishlist')) || [];
  console.log(storedGames);

  // add modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedSquad, setSelectedSquad] = useState('');
  const [availableSquads, setAvailableSquads] = useState([]);
  const [currentTeam, setCurrentTeam] = useState('');

  // retrieve data from local storage
  const storedTeam = JSON.parse(localStorage.getItem('CurrentTeam'));

  // set initial state for currentTeam
  useEffect(() => {
    if (storedTeam && storedTeam.teamName) {
      const initialCurrentTeam = storedTeam.teamName.toUpperCase();
      setCurrentTeam(initialCurrentTeam);
    }
  }, [storedTeam]);

  // open and close the modal functionality
  const openModal = (game) => {
    setSelectedGame(game);
    setModalOpen(true);

    // when the modal opens, set the squad/team names from local storage
    const squads = JSON.parse(localStorage.getItem('Teams')) || [];
    const squadNames = squads.map(squad => squad.teamName);
    console.log(squadNames);
    setAvailableSquads(squadNames);
  };

  const closeModal = () => {
    setSelectedGame(null);
    setModalOpen(false);
  };

  const schedule = () => {
    // add squad name and game name to local storage
    const newTeam = {
      teamName: currentTeam,
      game: selectedGame.name,
      genre: '',
      slug: selectedGame.slug
    }

    saveToLS(newTeam); // save to local storage

    // direct user to player 1 page
    navigate('/player1');
  }

  function saveToLS(object) {
    localStorage.setItem("CurrentTeam", JSON.stringify(object)); // Kane: I added this to keep track of the current team
  }

  const onRemove = () => {
    // retrieve wishlist from local storage
    const currentWishlist = JSON.parse(localStorage.getItem('Wishlist')) || [];
    console.log(currentWishlist);

    // find the game you want to remove using findIndex
    const gameIndex = currentWishlist.findIndex((game) => game.name === selectedGame.name);

    if (gameIndex !== -1) {
      // remove the selected game from the wishlist array
      currentWishlist.splice(gameIndex, 1);
  
      // update local storage with the modified wishlist
      localStorage.setItem('Wishlist', JSON.stringify(currentWishlist));
  
      // close modal
      closeModal();
    }
  }

  // if the user's squad names list changes, the list within the modal will also update
  useEffect(() => {
    const squads = JSON.parse(localStorage.getItem('Teams')) || [];
    const squadNames = squads.map(squad => squad.teamName);
    console.log(squadNames);
    setAvailableSquads(squadNames);
  }, [modalOpen]);

  // handle squad selection
  const handleSquadSelection = (selectedSquad) => {
    setSelectedSquad(selectedSquad);
    const updatedCurrentTeam = selectedSquad.toUpperCase();
    setCurrentTeam(updatedCurrentTeam);
  };

  // updates currentTeam when selectedSquad changes
  useEffect(() => {
    const updatedCurrentTeam = selectedSquad.toUpperCase();
    setCurrentTeam(updatedCurrentTeam);
  }, [selectedSquad]);

  const gameCards = storedGames.map((game)=>(
    <div className='w-52 mx-5 relative cursor-pointer' key={game.name} onClick={() => openModal(game)}>
      <img className='rounded-xl w-52 h-72 object-cover object-center' src={game.url} alt={game.name} />
      <div class="flex items-center justify-center absolute top-0 w-full h-72 bg-red opacity-0 hover:opacity-90 transition hover:rounded-xl rounded-xl schedule-container">
        <h1 className='uppercase absolute text-5xl text-cyan schedule-btn'>Schedule</h1>
      </div>  
      <h2 className='text-white text-3xl text-center mt-3 mb-10'>{game.name}</h2>
    </div>
  )
  )

  console.log(gameCards);
  return (
    <div className='wishlist'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center mt-10 pageTitle'>Wishlist</h1>
      <p className='font-smallText text-center mt-4'>Click on the selected title to start scheduling</p>

      {/* wishlist cards */}
      <div className='mt-20 flex flex-row flex-wrap w-full justify-center'>
          {gameCards}
      </div>

      {/* Overlay */}
      {modalOpen && selectedGame && (
        <div>
          <div className='fixed inset-0 bg-black opacity-50'></div>
          {/* Modal */}
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded-lg relative w-96 min-h-80 w-[30%]'>
              
              {/* modal close button */}
              <button onClick={closeModal} className="absolute top-0 right-3 m-4 text-gray-600 hover:text-gray-800 text-4xl z-10">
                &times;
              </button>
              <h1 className='text-3xl mb-4 font-sub text-black uppercase'>Ready to play:<br /><span className='text-red'>{selectedGame.name}</span></h1>
              
              {/* modal body */}
              <h2 className='font-smallText text-black'>Your current squad <span className='text-black'>{storedTeam ? 'is ' + currentTeam : 'has not been chosen yet'}</span></h2>
              <hr className='my-5'/>
              <h3>If you don't have a squad name or want to play with a different squad, choose an option from below:</h3>
              
              {/* dropdown of available squad names from local storage */}
              <select
                value={selectedSquad}
                onChange={(e) => handleSquadSelection(e.target.value)}
                className='border rounded-md px-2 py-1 w-full text-black uppercase mt-3'
              >
                <option value='' disabled>Select squad</option>
                {availableSquads.map((squad, index) => (
                  <option key={index} value={squad}>
                    {squad}
                  </option>
                ))}
                {/* add the original squad name to the default option */}
                {storedTeam && (
                  <option value={storedTeam.teamName}>
                    {storedTeam.teamName}
                  </option>
                )}
              </select>
              <hr className='my-5'/>
              <p className='mb-10'>You've chosen to play {selectedGame?.name} with {currentTeam}. If you're happy with your choice, click "Schedule game".</p>
              <div className='flex flex-row justify-between'>
                <button onClick={onRemove} className='bg-red uppercase text-white font-sub px-4 py-2 rounded-md absolute bottom-6 left-6'>
                  Remove from wishlist
                </button>
                <button onClick={schedule} className='bg-blue uppercase text-white font-sub px-4 py-2 rounded-md absolute bottom-6 right-6'>
                  Schedule game
                </button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist