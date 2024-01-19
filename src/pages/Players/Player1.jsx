import React from "react";
import "./Player.css";
import PlayerInputContainer from "../../components/PlayerInputComponents/PlayerInputContainer";
import ActionBtn from "../../components/Buttons/ActionBtn";

const Player1 = () => {
    return (
        <>
            <PlayerInputContainer />
            <ActionBtn name="Add Player 2" />
        </>
    );
};

export default Player1;
