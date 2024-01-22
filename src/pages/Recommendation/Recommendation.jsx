import React, { useState, useEffect } from 'react';
import axios from "axios";
import GameCard from '../../components/GameCard/GameCard';

const Recommendation = () => {
  const [genreData, setGenreData] = useState(null);
  const [loading, setLoading] = useState(true);

  // calls data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/genres?key=15dc7ef863d140f8b11adec2cc08a02b');
        setGenreData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const genreTitle = localStorage.getItem('CurrentTeam');
  const genreParsed = JSON.parse(genreTitle).genre;
  console.log(genreParsed);

  console.log(genreData.results.length)
  const genreLength = genreData.results.length;
  console.log(genreLength)

  

  // while the data is load the below will render
  if (loading) {
    return <p className='font-sub text-red text-center'>Loading...</p>;
  }

  return (
    <div className='recommendations'>

      {/* title */}
      <h1 className='font-main text-cyan text-center mt-10 pageTitle'>Recommendations for {genreParsed} Games</h1>

      {/* genre data */}
      <p>Data: {JSON.stringify(genreData.results)}</p>


      {/* genre cards */}


      
      
    </div>
  )
}

export default Recommendation