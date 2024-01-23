import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '15dc7ef863d140f8b11adec2cc08a02b';
const genreUrl = 'https://api.rawg.io/api/genre?key=';

const genre = () => {
  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(genreUrl, {
          params: {
            key: API_KEY,
          },
        });

        setGenreData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {genreData && (
        <code style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
          {JSON.stringify(genreData, null, 2)}
        </code>
      )}
    </div>
  );
};

export default genre;
