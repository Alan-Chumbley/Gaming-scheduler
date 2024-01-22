import axios from "axios";

//** Authentication *//
 export async function RecommendSearch(atr){
    const apiKey = '0d78e57ce6444308b0caeb836b9cf165';
    const apiURL = 'https://api.rawg.io/api/games'


    // async function getData(atr) {
        try {
            const response = await axios.get(apiURL, {
                params: {
                    key: apiKey,
                    genres: atr,
                    
                },
            });

            if (response.data.results.length > 0) {
                // console.log(response.data);
                // console.log(response.data.results[0]);
                return response.data
            } else {
                console.log('No results found');
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
        // }
    
        // getData('shooter');
    }
// console.log(RecommendSearch());