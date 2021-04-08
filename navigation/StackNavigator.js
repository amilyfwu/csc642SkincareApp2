import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor:"#e6ccff",
    }
}

const MainStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName ="Home">
            <Stack.Screen name = "Home" component= {Home}/>
            <Stack.Screen name = "Detail" component= {Detail}/>
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Contact" component = {Contact}/>
        </Stack.Navigator>
    );
}

export {MainStackNavigator,ContactStackNavigator};