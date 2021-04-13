//Edit mode will overwrite the data
// Title
// Type
// Price
// Status
// Rate
// Comment
//Input cannot be blank except for Comment

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const EditMode = ({navigation, route}) => {
    console.log(route.params);
    //save
    //cancel - go back or navigate to product detail
    return(
        <View style = {styles.container}>
            <Text>This is Edit Mode Screen</Text>
            {/* <TextInput
                style = {styles.TextBorder} 
                placeholder = "Enter here" 
                maxLength = {20} 
                editable = {true} 
                onChangeText = {(text) => {console.log(text)}} 
                defaultValue = "blah"
                multiline = {true}
                numberOfLines = {5}
                value={"state val"}
            /> */}
            <Button title = "Save" onPress = {() => {navigation.goBack()}}></Button>
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
    textBorder:{
        borderColor:'grey',
        borderWidth: 2,
        padding: 10,
        width:'80%',
    }
}); 

export default EditMode;