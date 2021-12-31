// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the Date
const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

const currentDate = getDate();
const lastYear = currentDate.slice(0, 4) - 1;
const nextYear = parseInt(currentDate.slice(0, 4)) + 1;

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
