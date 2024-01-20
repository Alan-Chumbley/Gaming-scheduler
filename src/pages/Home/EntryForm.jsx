import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import ActionBtn from '../../components/Buttons/ActionBtn';

function EntryForm() {
    /* ************************************** VARIABLES ********************************************** */

    const genres = [
        "Action",
        "Horror",
        "Open World",
        "Fantasy",
        "Survival",
        "Warfare",
        "Thriller",
        "Stealth",
        "Drama",
        "Mystery",
        "Historical",
        "Sci-Fi",
    ];

    let storedData = JSON.parse(localStorage.getItem("Teams")) || [];

    const [team, setTeam] = useState("");
    const [game, setGame] = useState("");
    const [genre, setGenre] = useState("");

    let genresBtns;

    /* ************************************** HANDLING EVENTS *************************************** */

    // INPUT (GAME TITLE AND SQUAD ALIAS)
    const handleChange = (setState) => ({ target }) => {
        setState(target.value);
        const inputBtn = document.querySelector('#game-input').value;
        toggleBtns(inputBtn ? 'disable' : 'enable'); // if input has value: disable buttons, otherwise enable
    }

    // GENRE QUEST: BUTTONS
    const handleClick = (setState) => ({ target }) => {
        let selectedBtn = target.firstChild.data;
        const buttons = document.querySelector('#genresBtn');
        const btnChildren = buttons.children;

        if(!target.classList.contains('selectedBtn')){
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

        const newTeam = {
            teamName: team,
            game: game,
            genre: genre,
        }

        saveToLS(newTeam); // save to local storage
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
        storedData.push(object);
        localStorage.setItem("Teams", JSON.stringify(storedData));
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

    function toggleInput(state){
        const gameInput = document.querySelector('#game-input');

        if(state === 'disable'){
            gameInput.setAttribute('disabled', true);
            gameInput.classList.add('disabled');
        } else {
            gameInput.removeAttribute('disabled');
            gameInput.classList.remove('disabled');
        }
    }

    const sendToLink = () => genre ? './../Recommendation/Recommendation.jsx' : game ? './../Players/Player1.jsx' : null;

    /* *************************************** RENDER *************************************** */

    return (
        <div id="container">
            <div id="squad-alias">
                <div className="sm:block md:block lg:flex items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Squad Alias</h2>
                    <p className="italic explanation md:pl-2">
                        name your gaming team
                    </p>
                </div>
                <input
                    type="text"
                    value={team}
                    onChange={handleChange(setTeam)}
                    maxLength="58"
                />
            </div>

            <div id="game-title">
                <div className="sm:block md:block lg:flex md:items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Game Title</h2>
                    <p className="italic explanation md:pl-2">
                        type the game title if known
                    </p>
                </div>
                <input type='text' id="game-input" value={game} onChange={handleChange(setGame)} maxLength="58" />
            </div>

            <div id="genre-quest">
                <div className="sm:block md:block lg:flex items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Genre Quest</h2>
                    <p className="italic explanation md:pl-2">
                        select one for a recommendation
                    </p>
                </div>
                <ul id="genresBtn">{genresBtns}</ul>
            </div>
            <Link to={sendToLink()} ><ActionBtn name="Let's go" onClick={handleSubmit} id="bigBtn" /></Link>
        </div>
    );
}

export default EntryForm;