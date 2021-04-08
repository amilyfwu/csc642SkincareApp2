import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Detail = () => {

    return(
        <View style = {styles.container}>
            <Text>This is Detail Screen</Text>
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

export default Detail;