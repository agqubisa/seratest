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
        data: action.value,
        isLoading: false,
        page: action.page,
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
        data: [...state.data, ...action.value],
        isLoading: false,
      };
    default:
      return state;
  }
};
