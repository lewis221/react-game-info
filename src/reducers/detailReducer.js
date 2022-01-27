const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLodding: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLodding: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLodding: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
