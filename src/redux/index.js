import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'historyReducer',
    'nowPlayingReducer',
    'popularReducer',
    'upcomingReducer',
  ],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(Store);

export {Store, Persistor};
