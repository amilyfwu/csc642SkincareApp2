import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Contact from '../screens/Contact';
import SkinMood from '../screens/SkinMood';
import RoutinePick from '../screens/DayAndNight/RoutinePick';
import ListPick from '../screens/ListP/ListPick';
import NewP from '../screens/ListP/NewP';
import UsedP from '../screens/ListP/UsedP';
import Calendar from '../screens/Calendar';
import CustomStack from './CustomStack';

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
            <Stack.Screen name = "Detail" component= {Detail} />
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
            <Stack.Screen name = "RoutinePick" component = {RoutinePick}/>
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
const ListStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "ListPick" component = {ListPick}/> 
            <Stack.Screen name = "NewP" component = {NewP}/>
            <Stack.Screen name = "UsedP" component = {UsedP}/> 
        </Stack.Navigator>
    );
}
const CalendarStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions = {screenOptionStyle}>
            <Stack.Screen name = "Calendar" component = {Calendar}/>
        </Stack.Navigator>
    );
}
export {MainStackNavigator,ContactStackNavigator, DayAndNightStackNavigator, SkinMoodStackNavigator, ListStackNavigator, CalendarStackNavigator};