import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API key and base URL from RAWG
const API_KEY = '15dc7ef863d140f8b11adec2cc08a02b';
const genreUrl = 'https://api.rawg.io/api/genre';

const Genre = () => {
    const [genreData, setGenreData] = useState(null);

    // call the data once and save the response data to setGenreData
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
                <pre>{JSON.stringify(genreData, null, 2)}</pre>
            )}
        </div>
    )
    }

export default Genre