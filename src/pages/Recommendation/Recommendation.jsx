import React from 'react'
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {

  const genreTitle = localStorage.getItem('CurrentTeam');
  const genreParsed = JSON.parse(genreTitle).genre;
  console.log(genreParsed);

  const genreDetails = JSON.parse(Genre);
  console.log(genreDetails)

  return (
    <div className='recommendations'>

      {/* title */}
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      {/* genre cards */}
      console.log()


      
      
    </div>
  )
}

export default Recommendation