import React from "react";
import "./Player.css";
import PlayerInputContainer from "../../components/PlayerInputComponents/PlayerInputContainer";

const Player1 = () => {
    return (
        <>
            <PlayerInputContainer playerNum="Player 1" button="Add Player 2" navigate="/player1/player2"/>
        </>
    );
};

export default Player1;
