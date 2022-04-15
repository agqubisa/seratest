import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Routes from '~config/routes';
import {Persistor, Store} from '~redux';
import {navigationRef} from '~utils';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={false} persistor={Persistor}>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
