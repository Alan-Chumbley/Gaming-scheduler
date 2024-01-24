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
        <div className='fixed inset-0 bg-black opacity-50'></div>
      )}

      {/* Modal */}
      {modalOpen && selectedGame && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h1 className='text-3xl mb-4 font-sub text-black'>{selectedGame.name}</h1>
            {/* Add more modal content here */}
            <button onClick={closeModal} className='bg-red text-white px-4 py-2 rounded-md'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist