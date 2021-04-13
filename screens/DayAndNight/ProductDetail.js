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

const ProductDetail = ({navigation,route}) => {
    console.log(route.params)
    var value = route.params
    return(
        <View>
            <TextInput editable = {false} value = {route.params.title}></TextInput>
            <TextInput editable = {false} value = {route.params.type}></TextInput>
            <TextInput editable = {false} value = {route.params.price}></TextInput>
            <TextInput editable = {false} value = {route.params.status}></TextInput>
            <TextInput editable = {false} value = {route.params.rating}></TextInput>
            <TextInput editable = {false} value = {route.params.comment}></TextInput>
            <Button title = "Edit" onPress = {() => (navigation.push("Edit Mode", value))}></Button>
        </View>
    );
}

export default ProductDetail;