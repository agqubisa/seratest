import {combineReducers} from 'redux';
import {historyReducer} from './history';
import {nowPlayingReducer, popularReducer, upcomingReducer} from './movie';

const reducer = combineReducers({
  historyReducer,
  nowPlayingReducer,
  popularReducer,
  upcomingReducer,
});

export default reducer;
