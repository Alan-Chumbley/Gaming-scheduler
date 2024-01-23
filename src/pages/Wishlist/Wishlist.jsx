import React, { useState } from 'react';
import './Wishlist.css'
import WishlistModal from '../../components/Modal/WishlistModal';

const Wishlist = () => {
  const storedGames = JSON.parse(localStorage.getItem('Wishlist')) || [];
  console.log(storedGames);

  // check if the wishlist modal is open via state management
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  // pass through the game and set it to state on opening modal
  const openModal = (game) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  // closing the modal
  const closeModal = () => {
    setSelectedGame(null);
    setModalOpen(false);
  };

  const gameCards = storedGames.map((game)=>(
    <div className='w-52 mx-5 relative cursor-pointer' onClick={() => openModal(game)}>
      <img className='rounded-xl w-52 h-72 object-cover object-center' src={game.url} alt={game.name}/>
      <div class="absolute top-0 w-full h-72 bg-red opacity-0 hover:opacity-90 transition hover:rounded-xl rounded-xl">
        <h1 className='uppercase h-72 top-32 left-8 absolute text-main text-3xl text-cyan'>Schedule</h1>
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

      {/* WishlistModal */}
      {isModalOpen && <WishlistModal game={selectedGame} onClose={closeModal} />}
      
    </div>
  )
}

export default Wishlist