import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ActionBtn from '../../components/Buttons/ActionBtn';

function EntryForm() {
    /* *********************************************** VARIABLES ******************************************************************* */

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

    const [team, setTeam] = useState(""); // team name
    const [game, setGame] = useState(""); // game title
    const [genre, setGenre] = useState(""); // genre
    const [isLoading, setIsLoading] = useState(false); // is loading api?
    const [isValid, setIsValid] = useState(true); // is the game title valid?
    // const [link, setLink] = useState(null); // link: recommendation or player?
    const navigate = useNavigate();

    let genresBtns;
    let errorEl;

    // API related
    const searchTitle = game.toLowerCase().replace(' ', '-');
    const apiKey = '0d78e57ce6444308b0caeb836b9cf165';
    const apiURL = `https://api.allorigins.win/raw?url=https://api.rawg.io/api/games/${searchTitle}`;

    /* ********************************************** HANDLING EVENTS *********************************************************** */

    // INPUT: GAME TITLE AND SQUAD ALIAS
    const handleChange = (setState) => ({ target }) => {
        errorEl = document.querySelector('#error-msg-hp');
        errorEl.setAttribute('hidden', true);

        setState(target.value);
        const inputBtn = document.querySelector('#game-input').value;
        toggleBtns(inputBtn ? 'disable' : 'enable'); // if input has value: disable buttons, otherwise enable
    }

    // BUTTONS: GENRE QUEST
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
            // setLink('/recommendation');
        } else {
            target.classList.remove('selectedBtn');
            toggleInput('enable');
            setState(null);
            // setLink(null);
        }
    }



    // SUBMIT BUTTON: LET'S GO
    const handleSubmit = async ({ target }) => {
        errorEl = document.querySelector('#error-msg-hp');
        // load API data and verify

        if (game) {
            validateTitle();            
        }

        errorEl.removeAttribute('hidden', !isValid || !team || (!game && !genre));

        if (team && genre) {

            const newTeam = {
                teamName: team,
                game: game,
                genre: genre
            };
    
            saveToLS(newTeam);
            navigate('/recommendation')
        }
    };

/* **************************************************** API ***************************************************** */
    async function validateTitle() {
        setIsLoading(true);

            try {
                const response = await axios.get(`${apiURL}?key=${apiKey}`);
                const gameData = response.data;
                if (gameData && !gameData.detail) {
                    setIsValid(true);
                    // console.log(gameData.slug);
                    // console.log(gameData.name);
                    const newTeam = {
                        teamName: team,
                        game: gameData.name === undefined ? game : gameData.name,
                        slug: gameData.slug,
                        genre: genre
                    };
                    
                    console.log(newTeam);
                    saveToLS(newTeam);
                    navigate('/player1')
                } else {
                    setIsValid(false);
                }
            } catch (error) {
                console.log('Error fetching data: ', error.message);
                setIsValid(false);
            }
            setIsLoading(false);
    }



    /* **************************************************** BUILDING ELEMENTS ***************************************************** */

    // CREATE BUTTON FOR EACH GENRE
    genresBtns = genres.map((genre) => (
        <button
            key={genre}
            type="button"
            className="genreBtn"
            onClick={handleClick(setGenre)}
        >
            {genre}
        </button>
    ));


    /* ******************************************************** FUNCTIONS ***************************************************** */

    //SAVE TO LOCAL STORAGE
    function saveToLS(object) {
        localStorage.setItem("CurrentTeam", JSON.stringify(object)); // keep track of the current team
    }

    // TOGGLE BUTTONS: disable when game title is added
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

    // TOGGLE INPUT: disable when genre is selected
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


    // HANDLE ERRORS
    const handleErrors = () => !team && !game && !genre ? 'Complete the form to unlock the next level!'
        : !game && !genre ? 'Type your game title or pick a genre to venture forth!'
            : !team ? 'Summon your team! Add a team name to proceed.'
                : !isValid && !genre && game ? 'Game title not found. Type a valid one to continue.'
                    : null;

    /* **************************************************** RENDER ********************************************************* */

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
                <ActionBtn name="Let's go" onClick={handleSubmit} id="bigBtn" />
            {isLoading ? <p className='italic' id='loading-msg'>Verifying data...</p> : null}
            <p id='error-msg-hp' className='italic' hidden>{handleErrors()}</p>
        </div>
    );
}

export default EntryForm;