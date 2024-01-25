import React, { useState, useEffect } from 'react';
import './SavedPlayers.css'
import OutlineBtn from '../../components/Buttons/OutlineBtn';
import Modal from '../../components/Modal/Modal';

const SavedPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerIndex, setPlayerIndex] = useState(null);
  const playerData = localStorage.getItem('Players');
  const players = JSON.parse(playerData) || [];

  
  useEffect(()=>{
    if (playerIndex !== null) {
      const playerAvailability = players[playerIndex].availability
      console.log(players[playerIndex].name, playerAvailability);
      for (let i = 0; i < playerAvailability.length; i++) {
        const selectTimeSlot = document.querySelector("#" + playerAvailability[i]);
        selectTimeSlot.setAttribute(
            "class",
            "bg-cyan w-5 h-5 rounded-md active cursor-default active-checkbox"
        );
      }
    }
  }, [playerIndex])

  const openModal = (playerName, index) => {
    setSelectedPlayer(playerName);
    setPlayerIndex(index);
    const playerAvailability = players[index].availability
    console.log("modal " + playerAvailability);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  const handleRemovePlayer = (playerName) => {
    // Retrieve players from local storage
    const playerData = localStorage.getItem('Players');
    const players = JSON.parse(playerData) || [];

    // Filter out the player to be removed
    const updatedPlayers = players.filter((player) => player.name !== playerName);

    // Update local storage with the updated player list
    localStorage.setItem('Players', JSON.stringify(updatedPlayers));

    // Close the modal after removing the player
    closeModal();
  };



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
            <OutlineBtn id={player.id} name={player.name} onClick={() => openModal(player.name, index)} />
            {/* Modal Component for each player */}
            {selectedPlayer === player.name && (
              <Modal
                isOpen={selectedPlayer === player.name}
                onClose={closeModal}
                playerName={selectedPlayer}
                onRemovePlayer={handleRemovePlayer}
                availability={player.availability}
              />
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default SavedPlayers