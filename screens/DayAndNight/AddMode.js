import React from 'react';
import {styles} from '../../style/styles' 
import { View, Button, TextInput, Touchable, TouchableOpacity, Switch,Text } from 'react-native';
import { fakeData } from '../../data/fakeData';


const AddMode = ({navigation, route}) => {
    const [title , setTitle] = React.useState('');
    const [type , setType] = React.useState('');
    const [price , setPrice] = React.useState(0);
    const [status , setStatus] = React.useState('');
    const [rating , setRating] = React.useState(0);
    const [comment , setComment] = React.useState('');
    const [day , setDay] = React.useState(false);
    const [night , setNight] = React.useState(false);

    const addItem = () => {
        const tempId = (Date.now().toString(35) + Math.random().toString(36).substring(2)).substring(7, 18);
        const tempDate = Date.now();
        const today = new Date(tempDate);
        console.log(tempId, today.toLocaleDateString());
        const data = {
            'title': title,
            'type': type,
            'price': parseFloat(price),
            'status': status,
            'rating': parseInt(rating),
            'comment': comment,
            'day': day,
            'night': night,
            'dateEntered': today.toLocaleDateString(),
            'id': tempId,
        };
        console.log(data);
        fakeData.push(data);
    };

    const reset = () => {
        setTitle('');
        setType('');
        setPrice(0);
        setStatus('');
        setRating(0);
        setComment('');
        setDay(false);
        setNight(false);
    };

    return(
        <View>
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
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {status} 
                onChangeText = {(text)=> (setStatus(text))}
                maxLength = {4}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {rating + ''} 
                onChangeText = {(text)=> (setRating(text))}
                keyboardType = "number-pad"
                maxLength = {2}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {true} 
                value = {comment} 
                onChangeText = {(text)=> (setComment(text))}
                multiline = {true}
                numberOfLines = {10}
            />
            <Text>Day{day+''}</Text>
            <Switch onValueChange = {(val)=>(setDay(val))} value = {day} />
            <Text>Night</Text>
            <Switch onValueChange = {(val)=>(setNight(val))} value = {night}/>
            <Button 
                title = "Save" 
                onPress = {() => {
                    addItem();
                    reset();
                }}/> 
            <Button title = "Cancel" onPress = {() => {navigation.goBack()}}/> 
        </View>
    );
}

export default AddMode;