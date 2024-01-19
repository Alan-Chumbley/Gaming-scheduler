import React from "react";
import { useState } from "react";

function EntryForm() {

    const genres = ['Action', 'Horror', 'Open World', 'Fantasy', 'Survival', 'Warfare', 'Thriller', 'Stealth', 'Drama', 'Mystery', 'Historical', 'Sci-Fi'];

    let storedData = JSON.parse(localStorage.getItem('Teams')) || [];

    const [team, setTeam] = useState('');
    const [game, setGame] = useState('');
    const [genre, setGenre] = useState('');


    const handleChange = (setState) => ({ target }) => {
        setState(target.value);
    }

    const handleClick = (setState) => ({ target }) => {
        setState(target.firstChild.data)
        console.log(target.firstChild.data);
    }

    const handleSubmit = ({ target }) => {
        console.log(team);
        console.log(game);
        console.log(genre);

        const newTeam = [{
            teamName: team,
            game: game,
            genre: genre,
        }]
    
        saveToLS(newTeam);
    }


    const genresBtns = genres.map(genre => <button onClick={handleClick(setGenre)}>{genre}</button>);


    function saveToLS(object){
        storedData.push(object);
        localStorage.setItem('Teams', JSON.stringify(storedData));
    }




    return (
        <div>
            <div id="squad-alias">
                <h2>Squad Alias</h2>
                <p>name your gaming team</p>
                <input type='text' value={team} onChange={handleChange(setTeam)} />
            </div>

            <div id="game-title">
                <h2>GameTitle</h2>
                <p>type the game title if known</p>
                <input type='text'  value={game} onChange={handleChange(setGame)}  />
            </div>

            <div id="genre-quest">
                <h2>Genre Quest</h2>
                <p>select one in case you look for a recommendation</p>
                <ul>{genresBtns}</ul>
            </div>

            <button onClick={handleSubmit}>Let's Go</button>
        </div>
    );
}

export default EntryForm;