import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

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
import Overview from '../screens/DayAndNight/Overview';
import ProductDetail from '../screens/DayAndNight/ProductDetail';
import EditMode from '../screens/DayAndNight/EditMode';
import { Ionicons } from '@expo/vector-icons';
import AddMode from '../screens/DayAndNight/AddMode';
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
            <Stack.Screen 
                name = "Pick Routine" 
                component = {RoutinePick}
                options = {()=>({
                    title: "Pick Routine",
                })}
            />
            <Stack.Screen 
                name = "Overview"  
                component = {Overview} 
                options = {({route})=>({
                    title: route.params.routine,
                })}
            />
            <Stack.Screen
                name = "Add Mode"
                component = {AddMode}
                options = {()=>({
                    title: "Add",
                })}
            />
            <Stack.Screen 
                name = "Product Detail"  
                component = {ProductDetail} 
            />
            <Stack.Screen
                name = "Edit Mode"
                component = {EditMode}
                options = {() => ({
                    title: "Detail"
                })}
                //trying to add icon on the top right
                // options = {(prop) => ({
                //     headerRight: () => {
                //         console.log(prop)
                //         return (
                //             <TouchableOpacity>
                //                <Ionicons name = "save-outline" size = {12} color = "black"/>
                //             </TouchableOpacity>
                //         );
                //     },
                // })}
            />
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
            <Stack.Screen name = "Pick List" component = {ListPick}/> 
            <Stack.Screen name = "New" component = {NewP}/>
            <Stack.Screen name = "Used" component = {UsedP}/> 
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