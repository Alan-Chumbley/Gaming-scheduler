import React from 'react'
import './Player.css'
import PlayerInputContainer from "../../components/PlayerInputComponents/PlayerInputContainer";

const Player2 = () => {
  return (
    <>
      <PlayerInputContainer playerNum="Player 2" button="Generate Schedule" navigate="/player1/player2/summary"/>
    </>
  )
}

export default Player2