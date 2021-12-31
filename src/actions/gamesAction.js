import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
  // Different ways (without async and await):
  /* 
    axios.get(popularGamesURL())
    .then(data => {
            
    })
  */
};

//
