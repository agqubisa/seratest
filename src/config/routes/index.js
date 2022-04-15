import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DetailScreen,
  HomeScreen,
  ListContentScreen,
  ListSearchScreen,
} from '~screens';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ListContent"
        component={ListContentScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="ListSearch"
        component={ListSearchScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
