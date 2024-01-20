import axios from "axios";

//** Authentication *//

const clientID = "so4qo327upvikt16q9cw70yyii1gz9"; // insert your client ID
const clientSecret = "gd9dja25tgougldunbc8r5h1rl80al"; // insert your client secret
let AuthURL = `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`;

// You need to first get an access token from authentication, then use the access token and client id to make API calls
axios.post(AuthURL, "")
    .then(function (response) {
        const access_token = response.data.access_token;

        //** API calls **//
recommended
        const gameURL = "https://api.igdb.com/v4/games"; // Your API call URL
        let body = 'fields *; search "FIFA"'; // Edit your API call fields

        let config = {
            method: "post",
            url: gameURL,
            headers: {
                "Client-ID": "so4qo327upvikt16q9cw70yyii1gz9", // insert your IGDB client ID
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
            data: body,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch(function (error) {
        console.log(error);
    });
