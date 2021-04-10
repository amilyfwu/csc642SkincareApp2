import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RoutinePick = ({navigation}) => {
    //Pick Routine
    //onPress = {()=>{navigation.navigate('Overview',{routine:"Night"})}}
    return(
        <View style = {styles.container}>
            <Button title = "☀️"  />
            <Button title = "🌙"/>
            <Button title = "☀️🌙"/>
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