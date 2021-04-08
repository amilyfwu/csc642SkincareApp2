import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';


export default function App() {
  return (
   <NavigationContainer>
      <DrawerNavigator/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


