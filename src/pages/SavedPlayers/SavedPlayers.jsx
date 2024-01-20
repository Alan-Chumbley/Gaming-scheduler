import React, { useState } from 'react';
import './SavedPlayers.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';
import Modal from '../../components/Modal/Modal';

const SavedPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openModal = (playerName) => {
    setSelectedPlayer(playerName);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  const playerData = localStorage.getItem('Players');
  const players = JSON.parse(playerData) || [];
  console.log(players);

  return (
    <div className='players'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center mt-10 pageTitle'>Saved Players</h1>
      <p className='font-smallText text-center mt-4'>Click on the chosen player to load their schedule</p>

      {/* Squad buttons and Modal Component */}
      <div className='w-100 flex flex-col justify-center mt-20'>
        {players.map((player, index) => (
          <div key={index}>
            <OutlineBtn id={player.id} name={player.name} onClick={() => openModal(player.name)} />
            {/* Modal Component for each player */}
            {selectedPlayer === player.name && (
              <Modal isOpen={selectedPlayer === player.name} onClose={closeModal} playerName={selectedPlayer} />
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default SavedPlayers