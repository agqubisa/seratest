import {
  setDiscover,
  setDiscoverLoading,
  setDiscoverLoadMore,
  setPagingDiscover,
} from '~constant/actionType';

const initDiscoverState = {
  data: [],
  page: 1,
  isLoading: false,
};

export const discoverReducer = (state = initDiscoverState, action) => {
  switch (action.type) {
    case setDiscover:
      return {
        ...state,
        data: action.value,
        isLoading: false,
        page: action.page,
      };
    case setDiscoverLoading:
      return {
        ...state,
        isLoading: action.value,
      };
    case setDiscoverLoadMore:
      return {
        ...state,
        page: state.page + 1,
      };
    case setPagingDiscover:
      return {
        ...state,
        data: [...state.data, ...action.value],
        isLoading: false,
      };
    default:
      return state;
  }
};
