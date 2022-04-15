import {
  setPopular,
  setPopularLoading,
  setPopularLoadMore,
  setPagingPopular,
} from '~constant/actionType';

const initPopularState = {
  data: [],
  page: 1,
  isLoading: false,
};

export const popularReducer = (state = initPopularState, action) => {
  switch (action.type) {
    case setPopular:
      return {
        ...state,
        data: action.value.results,
        isLoading: false,
        page: action.value.page,
      };
    case setPopularLoading:
      return {
        ...state,
        isLoading: action.value,
      };
    case setPopularLoadMore:
      return {
        ...state,
        page: state.page + 1,
      };
    case setPagingPopular:
      return {
        ...state,
        data: [...state.data, ...action.value.results],
        isLoading: false,
      };
    default:
      return state;
  }
};
