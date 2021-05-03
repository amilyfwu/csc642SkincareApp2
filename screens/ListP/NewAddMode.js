import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../../style/styles';
import {fakeNewData} from '../../data/fakeNewData';

const NewAddMode = ({navigation,route}) => {
    const [title , setTitle] = React.useState('');
    const [type , setType] = React.useState('');
    const [price , setPrice] = React.useState(0);

    const addItem = () => {
        const tempId = (Date.now().toString(35) + Math.random().toString(36).substring(2)).substring(7, 18);
        const data = {
            'title': title,
            'type': type,
            'price': parseFloat(price),
            'id': tempId,
        };
        console.log(data);
        fakeNewData.push(data);
    };
    const reset = () => {
        setTitle('');
        setType('');
        setPrice(0);
    };

    return(
        <View style = {globalStyles.container}>
            <Text>new Edit mode</Text>
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {true} 
                value = {title} 
                onChangeText = {(text)=> (setTitle(text))}
                maxLength = {30}
            />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {true} 
                value = {type} 
                onChangeText = {(text)=> (setType(text))}
                maxLength = {12}
            />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {true} 
                value = {price + ''} 
                onChangeText = {(text)=> (setPrice(text))}
                keyboardType = "numeric"
                maxLength = {7}
            />
            <Button 
                title = "Save" 
                onPress = {() => {
                    addItem();
                    reset();
                }}
            /> 
            <Button title = "Cancel" onPress = {() => {navigation.goBack()}}/> 
        </View>
    );
         
};

export default NewAddMode;