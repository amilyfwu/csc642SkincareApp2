import React from 'react';
import {styles} from '../../style/styles' 
import { View, Button, TextInput } from 'react-native';


const AddMode = () => {
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
        <View>
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {title} 
                onChangeText = {(text)=> (setTitle(text))}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {type} 
                onChangeText = {(text)=> (setType(text))}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {price} 
                onChangeText = {(text)=> (setPrice(text))}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {status} 
                onChangeText = {(text)=> (setStatus(text))}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {rating} 
                onChangeText = {(text)=> (setRating(text))}
                
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {comment} 
                onChangeText = {(text)=> (setComment(text))}
            />
            <Button title = "Save" onPress = {() => {}}/> 
            <Button title = "Cancel" onPress = {() => {}}/> 
        </View>
    );
}

export default AddMode;