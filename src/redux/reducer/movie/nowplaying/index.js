import {
  setNowPlaying,
  setNowPlayingLoading,
  setNowPlayingLoadMore,
  setPagingNowPlaying,
} from '~constant/actionType';

const initNowPlayingState = {
  data: [],
  page: 1,
  isLoading: false,
};

export const nowPlayingReducer = (state = initNowPlayingState, action) => {
  switch (action.type) {
    case setNowPlaying:
      return {
        ...state,
        data: action.value,
        isLoading: false,
        page: action.page,
      };
    case setNowPlayingLoading:
      return {
        ...state,
        isLoading: action.value,
      };
    case setNowPlayingLoadMore:
      return {
        ...state,
        page: state.page + 1,
      };
    case setPagingNowPlaying:
      return {
        ...state,
        data: [...state.data, ...action.value],
        isLoading: false,
      };
    default:
      return state;
  }
};
