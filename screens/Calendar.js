import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../style/styles';
import { Calendar } from 'react-native-calendars';
import { fakeMoodData } from '../data/fakeMoodData';

const CalendarPage = () => {
    var avgMood = 0;
    var moodEmoji = '';

    fakeMoodData.forEach(({mood, date}, i) => {
        //console.log(mood, fakeMoodData.length)
        avgMood+=mood;
        if(i === fakeMoodData.length-1){
            return avgMood/=fakeMoodData.length;
        }
    })

    //console.log(avgMood);
    avgMood = Math.round(avgMood);

    switch(avgMood){
        case 0:
            moodEmoji = '🙁';
            break;
        case 1:
            moodEmoji = '😐';
            break;
        case 2:
            moodEmoji = '🙂';
            break;
        case 3:
            moodEmoji = '😎';              
            break;    
    }

    return(
        <View>
            <Calendar 
                maxDate = {new Date()}   
            />
            <Text style = {globalStyles.calendarEmoji}>{moodEmoji}</Text>
        </View>
    );

};


export default CalendarPage;