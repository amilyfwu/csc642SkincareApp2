import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Calendar = () => {
    //import calendar here
    return(
        <View style = {styles.container}>
            <Text>This is Calendar Screen</Text>
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

export default Calendar;