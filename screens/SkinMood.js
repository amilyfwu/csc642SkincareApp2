import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { fakeMoodData } from '../data/fakeMoodData';
import { globalStyles } from '../style/styles';

const SkinMood = ({navigation, route}) => {
    const [message, setMessage] = React.useState(false);

    const handleMood = (prop) => {
        //console.log(prop, prop.target.textContent)
        //console.log(x.target.textContent);
        var mood = -1;
        switch(prop){
            case 0:
                mood = 0;
                break;
            case 1:
                mood = 1;
                break;
            case 2:
                mood = 2;
                break;
            case 3:
                mood = 3;              
                break;    
        }

        const tempDate = Date.now();
        const today = new Date(tempDate).toLocaleDateString();
        const moodData = {
            'mood': mood,
            'date': today,
        };
        const findItem = fakeMoodData.find(element => element.date === moodData.date);

        if(findItem === undefined){
            fakeMoodData.push(moodData);
            setMessage(true);
        }
        else{
            console.log('already exist');
        }
    };

    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.font1}>How is Your Skin Today?</Text>
            <Text>{message ? 'Submitted' : 'Not Submitted' }</Text>

            <TouchableOpacity 
                style = {globalStyles.button1}
                onPress = {() => handleMood(3)}
            >
                <Text style = {globalStyles.text1}>😎</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {globalStyles.button1}
                onPress = {() => handleMood(2)}
            >
                <Text style = {globalStyles.text1}>🙂</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {globalStyles.button1}
                onPress = {() => handleMood(1)}
            >
                <Text style = {globalStyles.text1}>😐</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {globalStyles.button1}
                onPress = {() => handleMood(0)}
            >
                <Text style = {globalStyles.text1}>🙁</Text>
            </TouchableOpacity>
            
        </View>
    );
};


export default SkinMood;