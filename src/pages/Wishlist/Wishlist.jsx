import React, { useState } from 'react';
import './Wishlist.css'

const Wishlist = () => {
  const storedGames = JSON.parse(localStorage.getItem('Wishlist')) || [];
  console.log(storedGames);

  // add modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  // open and close the modal functionality
  const openModal = (game) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGame(null);
    setModalOpen(false);
  };

  const schedule = () => {

  }

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
            <div className='bg-white p-8 rounded-lg relative w-96 h-96'>
              {/* modal close button */}
              <button onClick={closeModal} className="absolute top-0 right-3 m-4 text-gray-600 hover:text-gray-800 text-4xl z-10">
                &times;
              </button>
              <h1 className='text-3xl mb-4 font-sub text-black uppercase'>Ready to play:<br /><span className='text-red'>{selectedGame.name}</span></h1>
              {/* modal body */}
              <h2 className='font-smallText text-black'>Choose your squad:</h2>
              {/* dropdown of available squad names from local storage */}
              <p>You've chosen to play {selectedGame.name} with this squad. If you're happy with your choice, click "Schedule game".</p>
              <button onClick={schedule} className='bg-blue uppercase text-white font-sub px-4 py-2 rounded-md absolute bottom-6 right-6'>
                Schedule game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist