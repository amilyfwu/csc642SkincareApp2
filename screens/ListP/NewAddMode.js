import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../../style/styles';
import {fakeNewData} from '../../fakeNewData';

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

    return(
        <View style = {styles.container}>
            <Text>new Edit mode</Text>
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {title} 
                onChangeText = {(text)=> (setTitle(text))}
                maxLength = {30}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {type} 
                onChangeText = {(text)=> (setType(text))}
                maxLength = {12}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {price + ''} 
                onChangeText = {(text)=> (setPrice(text))}
                keyboardType = "numeric"
                maxLength = {7}
            />
            <Button title = "Save" onPress = {() => {addItem()}}/> 
            <Button title = "Cancel" onPress = {() => {navigation.goBack()}}/> 
        </View>
    );
         
};

export default NewAddMode;