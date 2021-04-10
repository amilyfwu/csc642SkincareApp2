import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ListPick = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <Text>This is List Screen</Text>
            <Button 
                title = "New Products"
                onPress = {() => navigation.navigate("NewP")}
            />
            <Button 
                title = "Old/Used Products"
                onPress = {() => navigation.navigate("UsedP", {new:false, old:true})
                }
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

export default ListPick;