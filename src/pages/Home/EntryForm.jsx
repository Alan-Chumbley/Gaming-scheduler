import React from "react";
import { useState } from "react";
import ActionBtn from '../../components/Buttons/ActionBtn';

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
        setState(target.firstChild.data);
        target.classList.toggle('selected genreBtn');
        console.log(target.className);
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


    const genresBtns = genres.map(genre => <button key={genre} type="button" className="genreBtn" onClick={handleClick(setGenre)}>{genre}</button>);


    function saveToLS(object){
        storedData.push(object);
        localStorage.setItem('Teams', JSON.stringify(storedData));
    }




    return (
        <div id="container">
            <div id="squad-alias">
                <div className="flex items-end inputTitle">
                    <h2 className="text-4xl">Squad Alias</h2>
                    <p className="pl-3 italic explanation">name your gaming team</p>
                </div>
                
                <input type='text' value={team} onChange={handleChange(setTeam)} maxLength="58" />
            </div>

            <div id="game-title">
                <div className="flex items-end inputTitle">
                    <h2 className="text-4xl">Game Title</h2>
                    <p className="pl-3 italic explanation">type the game title if known</p>
                </div>
                <input type='text' value={game} onChange={handleChange(setGame)} maxLength="58"  />
            </div>

            <div id="genre-quest">
                <div className="flex items-end inputTitle">
                    <h2 className="text-4xl">Genre Quest</h2>
                    <p className="pl-3 italic  explanation">select one in case you look for a recommendation</p>
                </div>
                <ul>{genresBtns}</ul>
            </div>

            <ActionBtn name="Let's go" onClick={handleSubmit} id="bigBtn" />

        </div>
    );
}

export default EntryForm;