import React from "react";
import { useState, useEffect } from "react";
import ActionBtn from '../../components/Buttons/ActionBtn';

function EntryForm() {

    const genres = ['Action', 'Horror', 'Open World', 'Fantasy', 'Survival', 'Warfare', 'Thriller', 'Stealth', 'Drama', 'Mystery', 'Historical', 'Sci-Fi'];

    let storedData = JSON.parse(localStorage.getItem('Teams')) || [];

    const [team, setTeam] = useState('');
    const [game, setGame] = useState('');
    const [genre, setGenre] = useState('');

    let genresBtns;

    const handleChange = (setState) => ({ target }) => {
        setState(target.value);
    }




    const handleClick = (setState) => ({ target }) => {
        const selectedBtn = target.firstChild.data;

        const buttons = document.querySelector('#genresBtn');
        const btnChildren = buttons.children;

        for(let i=0; i < btnChildren.length; i++){
            btnChildren[i].classList.remove('selectedBtn');
        }

        target.classList.add('selectedBtn');

        setState(selectedBtn);
        
    }


    useEffect(() => {
        console.log('Updated state:', genre);
    }, [genre]);










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

    genresBtns = genres.map(genre => <button key={genre} type="button" className="genreBtn" onClick={handleClick(setGenre)}>{genre}</button>);




    function saveToLS(object){
        storedData.push(object);
        localStorage.setItem('Teams', JSON.stringify(storedData));
    }




    return (
        <div id="container">
            <div id="squad-alias">
                <div className="sm:block md:block lg:flex items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Squad Alias</h2>
                    <p className="italic explanation md:pl-2">name your gaming team</p>
                </div>
                
                <input type='text' value={team} onChange={handleChange(setTeam)} maxLength="58" />
            </div>

            <div id="game-title">
                <div className="sm:block md:block lg:flex md:items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Game Title</h2>
                    <p className="italic explanation md:pl-2">type the game title if known</p>
                </div>
                <input type='text' value={game} onChange={handleChange(setGame)} maxLength="58"  />
            </div>

            <div id="genre-quest">
                <div className="sm:block md:block lg:flex items-end inputTitle">
                    <h2 className="sm:text-3xl md:text-4xl">Genre Quest</h2>
                    <p className="italic explanation md:pl-2">select one for a recommendation</p>
                </div>
                <ul id='genresBtn'>{genresBtns}</ul>
            </div>

            <ActionBtn name="Let's go" onClick={handleSubmit} id="bigBtn" />            

        </div>
    );
}

export default EntryForm;