import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';


import SkinMood from '../screens/SkinMood';
import RoutinePick from '../screens/DayAndNight/RoutinePick';
import ListPick from '../screens/ListP/ListPick';
import Calendar from '../screens/Calendar';
import Overview from '../screens/DayAndNight/Overview';
import ProductDetail from '../screens/DayAndNight/ProductDetail';
import EditMode from '../screens/DayAndNight/EditMode';
import { Ionicons } from '@expo/vector-icons';
import AddMode from '../screens/DayAndNight/AddMode';
import UsedOverview from '../screens/ListP/UsedOverview';
import NewOverview from '../screens/ListP/NewOverview';
import NewEditMode from '../screens/ListP/NewEditMode';
import NewAddMode from '../screens/ListP/NewAddMode';
import UsedEditMode from '../screens/ListP/UsedEditMode';
const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor:"#bdb6ea",
    }
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
            <Stack.Screen name = "New" component = {NewOverview}/>
            <Stack.Screen name = "Used" component = {UsedOverview}/>
            <Stack.Screen 
                name = "Used Edit Mode" 
                component = {UsedEditMode}
                options = {() => ({
                    title: "Detail"
                })}
            />
            <Stack.Screen 
                name = "New Edit Mode" 
                component = {NewEditMode}
                options = {() => ({
                    title: "Detail"
                })}
            /> 
            <Stack.Screen 
                name = "New Add Mode" 
                component = {NewAddMode}
                options = {() => ({
                    title: "Add New Product"
                })}
            /> 
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
export {DayAndNightStackNavigator, SkinMoodStackNavigator, ListStackNavigator, CalendarStackNavigator};