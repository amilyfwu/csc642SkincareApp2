import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    MainStackNavigator, 
    ContactStackNavigator, 
    SkinMoodStackNavigator, 
    DayAndNightStackNavigator
} from './StackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component= {MainStackNavigator} />
            <Tab.Screen name = "Contact" component= {ContactStackNavigator} />
            <Tab.Screen name = "SkinMood" component= {SkinMoodStackNavigator} />
            <Tab.Screen name = "Day/Night" component= {DayAndNightStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;