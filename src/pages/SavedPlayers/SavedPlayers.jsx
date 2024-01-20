import React, { useState } from 'react';
import './SavedPlayers.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';
import Modal from '../../components/Modal/Modal';

const SavedPlayers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

      {/* squad buttons */}
      <div className='w-100 flex flex-col justify-center mt-20'>
        {players.map((player, index) => (
          <OutlineBtn key={index} id={player.id} name={player.name} onClick={openModal} />
        ))}

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Your modal content goes here */}
          <p>{player.name}</p>
        </Modal>
      </div>

    </div>
  )
}

export default SavedPlayers