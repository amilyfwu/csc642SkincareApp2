//Edit mode will overwrite the data
// Title
// Type
// Price
// Status
// Rate
// Comment
//Input cannot be blank except for Comment

import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import {styles} from '../../style/styles' 

const EditMode = ({navigation, route}) => {
    //console.log(route.params);
    //save
    //cancel - go back or navigate to product detail
    //use Array function to sort or update the values
    return(
        <View style = {styles.container}>
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
            
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.title}></TextInput>
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.type}></TextInput>
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.price + ''}></TextInput>
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.status}></TextInput>
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.rating + ''}></TextInput>
            <TextInput style = {styles.textBorder} editable = {true} defaultValue = {route.params.comment}></TextInput>
            <Button title = "Save" onPress = {() => {navigation.goBack()}}/>  
        </View>
    );
};

export default EditMode;