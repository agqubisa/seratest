import {combineReducers} from 'redux';
import {
  discoverReducer,
  nowPlayingReducer,
  popularReducer,
  upcomingReducer,
} from './movie';

const reducer = combineReducers({
  discoverReducer,
  nowPlayingReducer,
  popularReducer,
  upcomingReducer,
});

export default reducer;
