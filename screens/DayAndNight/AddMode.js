import React from 'react';
import {globalStyles} from '../../style/styles' 
import { View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Switch,Text, Keyboard, ScrollView } from 'react-native';
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible ={false}>
            <ScrollView contentContainerStyle = {globalStyles.detailScroll}>
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
                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Status</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLong} 
                        editable = {true} 
                        value = {status} 
                        onChangeText = {(text)=> (setStatus(text))}
                        maxLength = {4}
                    />
                </View>

                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Rating</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLong} 
                        editable = {true} 
                        value = {rating + ''} 
                        onChangeText = {(text) => (setRating(text))}
                        keyboardType = "number-pad"
                        maxLength = {2}
                    />
                </View>

                
                <View style = {globalStyles.detailComment}>
                    <Text style = {globalStyles.detailTextComment}>Comment</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInputLongComment} 
                        editable = {true} 
                        value = {comment} 
                        onChangeText = {(text)=> (setComment(text))}
                        multiline = {true}
                        numberOfLines = {10}
                        keyboardType = "default"
                        returnKeyType = "done"
                        onSubmitEditing = {() => Keyboard.dismiss()}
                        blurOnSubmit = {true}
                    />
                </View>

                
                <View style = {globalStyles.detailSwitches}>
                    <View style = {globalStyles.detailSwitch}>
                        <Text style = {globalStyles.detailText}>Day</Text>
                        <Switch 
                            onValueChange = {(val)=>(setDay(val))} 
                            value = {day} 
                        />
                    </View>

                    <View style = {globalStyles.detailSwitch}>
                        <Text style = {globalStyles.detailText}>Night</Text>
                        <Switch 
                            onValueChange = {(val)=>(setNight(val))} 
                            value = {night}
                        />
                    </View>
                
                </View>

                <View style = {globalStyles.detailSwitches}>
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
                
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

export default AddMode;