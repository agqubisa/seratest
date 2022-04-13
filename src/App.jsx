import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from '~config/routes';
import {Persistor, Store} from '~redux';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate
        loading={
          <ActivityIndicator
            size="large"
            style={{alignSelf: 'center', flex: 1}}
          />
        }
        persistor={Persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
