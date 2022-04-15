import {
  setUpcoming,
  setUpcomingLoading,
  setUpcomingLoadMore,
  setPagingUpcoming,
} from '~constant/actionType';

const initUpcomingState = {
  data: [],
  page: 1,
  isLoading: false,
};

export const upcomingReducer = (state = initUpcomingState, action) => {
  switch (action.type) {
    case setUpcoming:
      return {
        ...state,
        data: action.value.results,
        isLoading: false,
        page: action.value.page,
      };
    case setUpcomingLoading:
      return {
        ...state,
        isLoading: action.value,
      };
    case setUpcomingLoadMore:
      return {
        ...state,
        page: state.page + 1,
      };
    case setPagingUpcoming:
      return {
        ...state,
        data: [...state.data, ...action.value.results],
        isLoading: false,
      };
    default:
      return state;
  }
};
