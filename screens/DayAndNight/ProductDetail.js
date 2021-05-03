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
import {globalStyles} from '../../style/styles' 
import { useSelector } from 'react-redux';


const ProductDetail = ({navigation,route}) => {
    const title = useSelector(state => state.dataReducer.title);
    const type = useSelector(state => state.dataReducer.type);  
    const price = useSelector(state => state.dataReducer.price);
    const status = useSelector(state => state.dataReducer.status);
    const rating = useSelector(state => state.dataReducer.rating);
    const comment = useSelector(state => state.dataReducer.comment);
    
    return(
        <View style = {globalStyles.container}>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {title}></TextInput>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {type}></TextInput>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {price + ''}></TextInput>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {status}></TextInput>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {rating + ''}></TextInput>
            <TextInput style = {globalStyles.textBorder} editable = {false} value = {comment}></TextInput>
            <Button title = "Edit" onPress = {() => (navigation.push("Edit Mode", route.params))}></Button>
        </View>
    );
}

export default ProductDetail;