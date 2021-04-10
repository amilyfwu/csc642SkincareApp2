import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    MainStackNavigator, 
    ContactStackNavigator, 
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
                            // size = size/2;
                            // return(
                            //     <View>
                            //         <Ionicons name = {'sunny-outline'} size = {size} color={color}/>
                            //         <Ionicons name = {'moon-outline'} size = {size} color={color}/>
                            //     </View>
                            // );
                            iconName = focused ? 'sunny':'sunny-outline';
                            break;
                    }
                    return <Ionicons name = {iconName} size = {size} color={color}/>;
                },
            })}
            tabBarOptions={{
                //activeBackgroundColor: '#bdb6ea',
                activeTintColor:'#bdb6ea',
                inactiveTintColor:'grey',
                showLabel: false,
                // tabStyle:{
                //     backgroundColor: '#bdb6ea',
                // },
                //style:{backgroundColor: '#bdb6ea'}


            }}
        >
            {/* <Tab.Screen name = "Home" component= {MainStackNavigator} /> */}
            <Tab.Screen name = "Day/Night" component= {DayAndNightStackNavigator} />
            <Tab.Screen name = "SkinMood" component= {SkinMoodStackNavigator} />
            <Tab.Screen name = "Calendar" component= {CalendarStackNavigator} />
            <Tab.Screen name = "List" component= {ListStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;