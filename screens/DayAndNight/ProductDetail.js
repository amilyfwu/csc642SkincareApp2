// Display text only Details of the product
// Title
// Type
// Price
// Status
// Rate
// Comment
// Day
// Night
// Date Entered- cannot edit
// Also needs a button to navigate to edit mode
import React from 'react';
import { View, Button, TextInput } from 'react-native';
import {styles} from '../../style/styles' 

const ProductDetail = ({navigation,route}) => {
    
    return(
        <View style = {styles.container}>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.title}></TextInput>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.type}></TextInput>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.price + ''}></TextInput>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.status}></TextInput>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.rating + ''}></TextInput>
            <TextInput style = {styles.textBorder} editable = {false} value = {route.params.comment}></TextInput>
            <Button title = "Edit" onPress = {() => (navigation.push("Edit Mode", route.params))}></Button>
        </View>
    );
}

export default ProductDetail;