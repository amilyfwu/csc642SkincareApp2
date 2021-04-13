import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SkinMood = ({navigation, route}) => {
    console.log(navigation, route);
    const [mood, setMood] = React.useState(1);
    
    // const handleMood = (x) => {
    //     //console.log(prop, prop.target.textContent)
    //     //console.log(x.target.textContent);
    //     switch(x.target.textContent){
    //         case "😎":
    //             setMood(3);  
    //             break;
    //         case "🙂":
    //             setMood(2);  
    //             break;
    //         case "😐":
    //             setMood(1);  
    //             break;
    //         case "🙁":
    //             setMood(0);  
    //             break;
    //         default:    
    //     }
    // }
    function handleMood(mood){
        console.log(mood);
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.font}>How is Your Skin Today? {mood}</Text>
            <Button 
                title = "😎"
                onPress = {handleMood}
            />
            <Button
                title = "🙂"
                onPress = {handleMood}
            />
            <Button 
                title = "😐"
                onPress = {handleMood}
            />
            <Button 
                title = "🙁"
                onPress = {handleMood}
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