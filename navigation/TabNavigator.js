import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    SkinMoodStackNavigator, 
    DayAndNightStackNavigator,
    ListStackNavigator,
    CalendarStackNavigator,
} from './StackNavigator';
import {Ionicons} from '@expo/vector-icons';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    var iconName;
                    var iconName2;
                    switch(route.name){
                        case "Calendar":
                            //<ion-icon name="calendar-clear"></ion-icon>
                            iconName ='calendar-outline';
                            break;
                        case "List":
                            iconName = 'ios-list';
                            break;
                        case "SkinMood":
                            iconName = focused? 'happy':'happy-outline';
                            break;
                        case "Day/Night":
                            iconName = focused? 'sunny':'sunny-outline';
                            iconName2 = focused? 'moon':'moon-outline';
                            return(
                                <View style={{flexDirection: 'row',}}>
                                    <Ionicons name = {iconName} size = {size} color={color}/>
                                    <Ionicons name = {iconName2} size = {size} color={color}/>
                                </View>
                            );
                            //iconName = focused ? 'sunny':'sunny-outline';
                            //break;
                    }
                    return <Ionicons name = {iconName} size = {size} color={color}/>;
                },
            })}
            tabBarOptions={{
                //activeBackgroundColor: '#bdb6ea',
                //activeTintColor:'#bdb6ea',
                activeTintColor:'#000000',
                //inactiveTintColor:'grey',  
                showLabel: false,
                tabStyle:{
                    backgroundColor: '#bdb6ea',
                },
                //style:{backgroundColor: '#bdb6ea'}


            }}
        >
            <Tab.Screen name = "Day/Night" component= {DayAndNightStackNavigator} />
            <Tab.Screen name = "SkinMood" component= {SkinMoodStackNavigator} />
            <Tab.Screen name = "Calendar" component= {CalendarStackNavigator} />
            <Tab.Screen name = "List" component= {ListStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;