import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer >
        <BottomTabNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>

  );
}


