import React, { useEffect } from 'react'
import './GameCard.css'
import WishlistBtn from '../Buttons/WishlistBtn';
import MoreBtn from '../Buttons/MoreBtn';
import { FaStar } from 'react-icons/fa';

const GameCard = (props) => {
  const [isToggled, setIsToggled] = React.useState(false);

  function handleWishlistClick(e) {
    setIsToggled(prevIsToggled => {
      const newIsToggled = !prevIsToggled;
      let button = "";

      if (e.target.matches('button')) {
        button = e.target
      } else {
        button = e.target.parentElement.parentElement
      }

      button.classList.toggle('wishlist-toggled', newIsToggled);
      console.log(newIsToggled);
      if (newIsToggled) {
        saveToWishlist(button)
      } else {
        deleteFromWishlist(button)
      }

      return newIsToggled;
    });
  }

  const saveToWishlist = (button) => {
    
    const name = button.getAttribute('data-game-name')
    const url = button.getAttribute('data-game-url')
    const slug = button.getAttribute('data-game-slug')

    const newGame = {
      name: name,
      url: url,
      slug: slug
    }
    const storedGames = JSON.parse(localStorage.getItem("Wishlist")) || []; // retrieves existing wishlist
    const results = storedGames.filter(game => game.name !== name);
    results.push(newGame);
    localStorage.setItem("Wishlist", JSON.stringify(results));
  }

  
  const deleteFromWishlist= (button) => {
    const name = button.getAttribute('data-game-name')
    const storedGames = JSON.parse(localStorage.getItem("Wishlist"))
    const results = storedGames.filter(game => game.name !== name);
    localStorage.setItem("Wishlist", JSON.stringify(results));
  }

  return (
    <div className='flex flex-col md:flex-row gameCard p-10'>
      <div className='rounded-xl relative imgHolder'>
        <img src={props.imageUrl} alt={props.name} className='gameImg' />

        {/* container with overlay */}
        <div className='absolute inset-x-0 bottom-0 flex flex-col justify-center items-center select' onClick={props.onClick} data-slug={props.slug}>
            <div id='container-sel-star'>
            <FaStar id='fa-star-icon'/>
            <p className='font-main text-black select-text'>Select</p>
            </div>
        </div>

      </div>
      <div className='flex flex-col mt-8 md:mt-0 md:ml-10'>
        <h2 className='font-sub text-cyan text-2xl'>{props.name}</h2>
        <p className='font-smallText text-white mt-4'>{props.description}</p>
        <div className='flex flex-row text-pinkHover mt-4'>
          <WishlistBtn name="Add to Wishlist" id='wishlist-button' onClick={handleWishlistClick} dataName={props.name} dataUrl={props.imageUrl} dataSlug={props.slug}/>
          <a href={props.website} target='_blank' className='font-smallText flex pl-5'><MoreBtn name="Read More" /></a>
        </div>
      </div>
    </div>
  )
}

export default GameCard