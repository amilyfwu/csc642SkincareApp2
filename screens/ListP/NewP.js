import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewP = ({navigation,route}) => {
    console.log(navigation,route);
    return(
        <View style = {styles.container}>
            <Text>This is New Screen</Text>
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

export default NewP;