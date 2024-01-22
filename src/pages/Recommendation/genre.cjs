// import libraries to retrieve data
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API key
const API_KEY = '15dc7ef863d140f8b11adec2cc08a02b';

// Base URL
const genreUrl = 'https://api.rawg.io/api/genre?key=';

// fetch data
const genreData = async () => {
  try {
    const response = await axios.get(genreUrl, {
      params: {
        key: API_KEY,
      }
    });

    // saving data as a variable
    const genreData = response.data;

    // convert the data into a string
    const jsonString = JSON.stringify(genreData, null, 2);

    // create a genre.json file
    fs.writeFile('genre.json', jsonString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data has been written to genre.json');
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

genreData();