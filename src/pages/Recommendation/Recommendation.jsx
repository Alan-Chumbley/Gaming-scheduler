import React from 'react'
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {
  const genreTitle = localStorage.getItem('CurrentTeam');
  const genreParsed = JSON.parse(genreTitle).genre;
  console.log(genreParsed);

  return (
    <div className='recommendations'>

      {/* content */}
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      
      
    </div>
  )
}

export default Recommendation