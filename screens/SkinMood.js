import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { fakeMoodData } from '../data/fakeMoodData';

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
        };

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
        <View style = {styles.container}>
            <Text style = {styles.font}>How is Your Skin Today?</Text>
            <Text>{message ? 'Submitted' : 'Not Submitted' }</Text>
            <Button 
                title = "😎"
                onPress = {() => handleMood(3)}
            />
            <Button
                title = "🙂"
                onPress = {() => handleMood(2)}
            />
            <Button 
                title = "😐"
                onPress = {() => handleMood(1)}
            />
            <Button 
                title = "🙁"
                onPress = {() => handleMood(0)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    font: {
        fontSize: 48,
    }
}); 

export default SkinMood;