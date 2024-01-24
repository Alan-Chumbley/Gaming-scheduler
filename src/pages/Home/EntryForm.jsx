import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActionBtn from '../../components/Buttons/ActionBtn';

function EntryForm() {
    /* ************************************** VARIABLES ********************************************** */

    const genres = [
        "action",
        "indie",
        "adventure",
        "strategy",
        "shooter",
        "casual",
        "simulation",
        "puzzle",
        "platform",
        "sports",
        "racing",
        "fighting",
    ];

    // let storedData = JSON.parse(localStorage.getItem("Teams")) || [];

    const [team, setTeam] = useState("");
    const [game, setGame] = useState("");
    const [genre, setGenre] = useState("");

    let genresBtns;
    let errorEl;

    /* ************************************** HANDLING EVENTS *************************************** */

    // INPUT (GAME TITLE AND SQUAD ALIAS)
    const handleChange = (setState) => ({ target }) => {
        errorEl = document.querySelector('#error-msg-hp');
        errorEl.setAttribute('hidden', true);

        setState(target.value);
        const inputBtn = document.querySelector('#game-input').value;
        toggleBtns(inputBtn ? 'disable' : 'enable'); // if input has value: disable buttons, otherwise enable
    }

    // GENRE QUEST: BUTTONS
    const handleClick = (setState) => ({ target }) => {
        errorEl = document.querySelector('#error-msg-hp');
        errorEl.setAttribute('hidden', true);

        let selectedBtn = target.firstChild.data;
        const buttons = document.querySelector('#genresBtn');
        const btnChildren = buttons.children;

        if (!target.classList.contains('selectedBtn')) {
            for (let i = 0; i < btnChildren.length; i++) {
                btnChildren[i].classList.remove('selectedBtn');
            }
            target.classList.add('selectedBtn');
            toggleInput('disable');
            setState(selectedBtn);
        } else {
            target.classList.remove('selectedBtn');
            toggleInput('enable');
            setState(null);
        }
    }

    // SUBMIT (LETS GO BUTTON)
    const handleSubmit = ({ target }) => {

        errorEl = document.querySelector('#error-msg-hp');
        // const doesexist = getData();
        returnResult();
        // console.log(getData())

        if (!team && !game && !genre || !game && !genre || !team) {
            errorEl.removeAttribute('hidden');
        } else {

            const newTeam = {
                teamName: team,
                game: game,
                genre: genre,
            }

            saveToLS(newTeam); // save to local storage

        }
    };

    genresBtns = genres.map((genre) => (
        <button
            key={genre}
            type="button"
            className="genreBtn"
            onClick={handleClick(setGenre)}
        >
            {genre}
        </button>
    )); // create buttons for each genre

    /* *************************************** FUNCTIONS *************************************** */

    //SAVE TO LOCAL STORAGE
    function saveToLS(object) {
        // storedData.push(object);
        // localStorage.setItem("Teams", JSON.stringify(storedData));
        localStorage.setItem("CurrentTeam", JSON.stringify(object)); // Kane: I added this to keep track of the current team
    }

    function toggleBtns(state) {
        const buttons = document.querySelector('#genresBtn');
        const btnChildren = buttons.children;

        if (state === 'disable') {
            for (let i = 0; i < btnChildren.length; i++) {
                btnChildren[i].classList.remove('selected');
                btnChildren[i].classList.add('disabled');
                btnChildren[i].setAttribute('disabled', true);
            }
        } else {
            for (let i = 0; i < btnChildren.length; i++) {
                btnChildren[i].classList.remove('disabled');
                btnChildren[i].removeAttribute('disabled');
            }
        }
    }

    function toggleInput(state) {
        const gameInput = document.querySelector('#game-input');

        if (state === 'disable') {
            gameInput.setAttribute('disabled', true);
            gameInput.classList.add('disabled');
        } else {
            gameInput.removeAttribute('disabled');
            gameInput.classList.remove('disabled');
        }
    }

    const sendToLink = () => !team ? null : genre ? '/recommendation' : game ? '/player1' : null;

    const handleErrors = () => !team && !game && !genre ? 'Complete the form to unlock the next level!' : !game && !genre ? 'Type your game title or pick a genre to venture forth!' : !team ? 'Summon your team! Add a team name to proceed.' : null;


    /* *************************************** API FUNCTION *************************************** */
    const id = '1007';
    const title = game;
    const searchTitle = game.toLowerCase().replace(' ', '-');
    const apiKey = '0d78e57ce6444308b0caeb836b9cf165';
    const apiURL = `https://api.allorigins.win/raw?url=https://api.rawg.io/api/games/${searchTitle}`;

    async function findTitle() {
        try {
            const response = await axios.get(`${apiURL}?key=${apiKey}`);
            const gameData = response.data;
            if(gameData && !gameData.detail){
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log('Error fetching data: ', error.message);
            return false;
        }
    }

    async function returnResult() {
        const result = await findTitle();
        console.log(result);
        return result;
    }

    /* *************************************** RENDER *************************************** */

    return (
        <div id="container">
            <div id="squad-alias">
                <div className="block items-center lg:flex items-end whitespace-nowrap inputTitle">
                    <h2 className="text-center text-4xl">Squad Alias</h2>
                    <p className="text-center italic explanation md:pl-2">
                        name your gaming team
                    </p>
                </div>
                <input
                    type="text" placeholder="e.g. Avengers"
                    value={team}
                    onChange={handleChange(setTeam)}
                    maxLength="58"
                />
            </div>

            <div id="game-title">
                <div className="block lg:flex md:items-end whitespace-nowrap inputTitle">
                    <h2 className="text-center text-4xl">Game Title</h2>
                    <p className="text-center italic explanation md:pl-2">
                        type the game title if known
                    </p>
                </div>
                <input type='text' placeholder="E.g. Elden Ring" id="game-input" value={game} onChange={handleChange(setGame)} maxLength="58" />
            </div>

            <div id="genre-quest">
                <div className="block items-center lg:flex lg:items-end whitespace-nowrap inputTitle">
                    <h2 className="text-center text-4xl">Genre Quest</h2>
                    <p className="text-center italic explanation md:pl-2">
                        select one for a recommendation
                    </p>
                </div>
                <ul id="genresBtn">{genresBtns}</ul>
            </div>
            {/* <Link to={sendToLink()} > */}
            <ActionBtn name="Let's go" onClick={handleSubmit} id="bigBtn" />
            {/* </Link> */}
            <p id='error-msg-hp' className='italic' hidden>{handleErrors()}</p>
        </div>
    );
}

export default EntryForm;