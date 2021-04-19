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
    console.log(route.params);
    //save
    //cancel - go back or navigate to product detail
    //use Array function to sort or update the values
    const [title , setTitle] = React.useState('');
    const [type , setType] = React.useState('');
    const [price , setPrice] = React.useState(0);
    const [status , setStatus] = React.useState('');
    const [rating , setRating] = React.useState(0);
    const [comment , setComment] = React.useState('');
    const [day , setDay] = React.useState(false);
    const [night , setNight] = React.useState(false);
    const [dateEntered , setDateEntered] = React.useState('');
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
            
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.title} 
                value = {title}
            />
            <TextInput
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.type} 
                value = {type}/>
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.price + ''} 
                value = {price}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.status} 
                value = {status}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.rating + ''} 
                value = {rating}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                defaultValue = {route.params.comment} 
                value = {comment}
            />
            <Button title = "Save" onPress = {() => {navigation.goBack()}}/> 
            <Button title = "Cancel" onPress = {() => {navigation.goBack()}}/>  

        </View>
    );

};

export default EditMode;