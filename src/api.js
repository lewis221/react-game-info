// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the Date
const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

currentDate = getDate();
console.log(currentDate);
lastYear = currentDate.slice(0, 4) - 1;
nextYear = currentDate.slice(0, 4) + 1;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
