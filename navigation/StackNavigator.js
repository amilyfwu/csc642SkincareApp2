import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Contact from '../screens/Contact';
import SkinMood from '../screens/SkinMood';
import Pick from '../screens/DayAndNight/Pick';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor:"#bdb6ea",
    }
}

const MainStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "Home" component= {Home}/>
            <Stack.Screen name = "Detail" component= {Detail}/>
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "Contact" component = {Contact}/>
        </Stack.Navigator>
    );
}

const DayAndNightStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "Pick" component = {Pick}/>
        </Stack.Navigator>
    );
}
const SkinMoodStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "SkinMood" component = {SkinMood}/>
        </Stack.Navigator>
    );
}
const Tab3StackNavigator = () => {
    
}
const Tab4StackNavigator = () => {
    
}
export {MainStackNavigator,ContactStackNavigator, DayAndNightStackNavigator, SkinMoodStackNavigator};