import {
  ADDLASTSEARCH,
  ADDLASTSEEN,
  REMOVEALLLASTSEARCH,
  REMOVEALLLASTSEEN,
  REMOVEONELASTSEARCH,
  REMOVEONELASTSEEN,
} from '~constant/actionType';

const intiHistoryState = {
  lastSearch: [],
  lastSeen: [],
};

export const historyReducer = (state = intiHistoryState, action) => {
  switch (action.type) {
    //LAST-SEARCH
    case ADDLASTSEARCH:
      const findSearch = state.lastSearch.find(x => x === action.value);
      if (!findSearch) {
        return {
          ...state,
          lastSearch: [action.value].concat(state.lastSearch).slice(0, 4),
        };
      } else {
        return state;
      }
    case REMOVEONELASTSEARCH:
      return {
        ...state,
        lastSearch:
          state.lastSearch.length === 1
            ? []
            : state.lastSearch.filter(x => x !== action.value),
      };
    case REMOVEALLLASTSEARCH:
      return {
        ...state,
        lastSearch: [],
      };

    //LAST-SEEN
    case ADDLASTSEEN:
      const findSeen = state.lastSeen.find(x => x.id === action.value.id);
      console.log(findSeen);
      if (!Boolean(findSeen)) {
        return {
          ...state,
          lastSeen: [action.value, ...state.lastSeen].slice(0, 4),
        };
      } else {
        return state;
      }
    case REMOVEONELASTSEEN:
      return {
        ...state,
        lastSeen:
          state.lastSeen.length === 1
            ? []
            : state.lastSeen.filter(x => x.id !== action.value.id),
      };
    case REMOVEALLLASTSEEN:
      return {
        ...state,
        lastSeen: [],
      };

    default:
      return state;
  }
};
