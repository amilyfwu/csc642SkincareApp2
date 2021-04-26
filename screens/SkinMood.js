import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SkinMood = ({navigation, route}) => {
    
    const handleMood = (prop) => {
        //console.log(prop, prop.target.textContent)
        //console.log(x.target.textContent);
        switch(prop){
            case 0:
                  
                break;
            case 1:
                 
                break;
            case 2:
                
                break;
            case 3:
                  
                break;    
        }
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.font}>How is Your Skin Today?</Text>
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