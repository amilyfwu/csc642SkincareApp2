import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Pick = () => {

    return(
        <View style = {styles.container}>
            <Button title = "☀️"/>
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

export default Pick;