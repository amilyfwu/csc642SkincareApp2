import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../style/styles';
import {Calendar} from 'react-native-calendars';
import { fakeMoodData } from '../data/fakeMoodData';

const CalendarPage = () => {
    //import calendar here
    return(
        <View>
            <Calendar 
                maxDate = {new Date()}
                
            />
        </View>
    );

};


export default CalendarPage;