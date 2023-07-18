import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ALL_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  // const allCharactersCopy = state.allCharacters;
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (pj) => pj.gender === action.payload
        ),
      };

    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) => {
          if (a > b) {
            return 1;
          } else {
            return -1;
          }

          if (a < b) {
            return 1;
          } else {
            return -1;
          }

          return 0;
        }),
      };

    case ALL_FAVORITES:
      return { ...state, myFavorites: state.allCharacters };

    default:
      return { ...state };
  }
};

export default reducer;
