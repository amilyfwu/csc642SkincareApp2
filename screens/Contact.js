import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Contact = () => {

    return(
        <View style = {styles.container}>
            <Text>This is Contact Screen</Text>
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

export default Contact;