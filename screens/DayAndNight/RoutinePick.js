import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RoutinePick = ({navigation}) => {
    //Pick Routine
    //onPress = {()=>{navigation.navigate('Overview',{routine:"Night"})}}
    return(
        <View style = {styles.container}>
            <Button
                title = "☀️"
                onPress = {()=>{navigation.push("Overview",{day:true, night:false})}}
            />
            <Button 
                title = "🌙"
                onPress = {()=>{navigation.push("Overview",{day:false, night:true})}}
            />
            <Button 
                title = "☀️🌙"
                onPress = {()=>{navigation.push("Overview",{day:true, night:true})}}
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
}); 

export default RoutinePick;