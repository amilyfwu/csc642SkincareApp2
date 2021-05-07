import React from 'react';
import { Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible ={false}>
            <View>
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Title</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLong} 
                        editable = {true} 
                        value = {title} 
                        onChangeText = {(text)=> (setTitle(text))}
                        maxLength = {70}
                        multiline = {true}
                    />
                </View>

                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Type</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLong} 
                        editable = {true} 
                        value = {type} 
                        onChangeText = {(text)=> (setType(text))}
                        maxLength = {12}
                    />
                </View>
                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Price</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLong} 
                        editable = {true} 
                        value = {price + ''} 
                        onChangeText = {(text)=> (setPrice(text))}
                        keyboardType = "numeric"
                        maxLength = {7}
                    />
                </View>

                
                <View style = {globalStyles.detailSwitches} >
                    <TouchableOpacity 
                        style = {globalStyles.detailButton}
                        onPress = {() => {
                            addItem();
                            reset();
                        }}
                    >
                        <Text style = {globalStyles.detailButtonText}>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {globalStyles.detailButton}
                        onPress = {() => {navigation.goBack()}}
                    >
                        <Text style = {globalStyles.detailButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
         
};

export default NewAddMode;