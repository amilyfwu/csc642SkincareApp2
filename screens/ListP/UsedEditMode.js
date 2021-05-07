import React from 'react';
import { Text, View, Button, TextInput, Switch, TouchableWithoutFeedback, Keyboard, ScrollView,TouchableOpacity } from 'react-native';
import { fakeData } from '../../data/fakeData';
import {globalStyles} from '../../style/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setUsedTitle,setUsedType,setUsedComment,setUsedPrice,setUsedStatus,setUsedRating, setUsedDay,setUsedNight } from '../../redux/actions/usedDataAction';


const UsedEditMode = ({navigation, route}) => {

    const [editable,setEditable] = React.useState(false);

    const title = useSelector(state => state.usedDataReducer.title);
    const type = useSelector(state => state.usedDataReducer.type);  
    const price = useSelector(state => state.usedDataReducer.price);
    const status = useSelector(state => state.usedDataReducer.status);
    const rating = useSelector(state => state.usedDataReducer.rating);
    const comment = useSelector(state => state.usedDataReducer.comment);
    const day = useSelector(state => state.usedDataReducer.day);
    const night = useSelector(state => state.usedDataReducer.night);
    const dateEntered= useSelector(state => state.usedDataReducer.dateEntered);
    const id = useSelector(state => state.usedDataReducer.id);
    const dispatch = useDispatch();


    const editData = () => {
        //console.log("edit data");
        const updateData = {
            'title': title,
            'type': type,
            'price': parseFloat(price),
            'status': status,
            'rating': parseInt(rating),
            'comment': comment,
            'day': day,
            'night': night,
            'dateEntered': dateEntered,
            'id': id,
        };
        //splice data to update
        //finds the item
        const findItem =  fakeData.find(element => element.id === id);
        const replaceItem = fakeData.indexOf(findItem);
        //console.log(replaceItem);
        fakeData.splice(replaceItem, 1, updateData);
        //console.log("Updated Data:", fakeData);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible ={false}>
            <ScrollView contentContainerStyle = {globalStyles.detailScroll}>
                {/* <TextInput
                    style = {globalStyles.detailTextInput} 
                    placeholder = "Enter here" 
                    maxLength = {20} 
                    editable = {true} 
                    onChangeText = {(text) => {console.log(text)}} 
                    defaultValue = "blah"
                    multiline = {true}
                    numberOfLines = {5}
                    value={"state val"}
                /> */}
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Title</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {title}
                        onChangeText = {(text)=> (dispatch(setUsedTitle(text)))}
                        maxLength = {70}
                        multiline = {true}
                    />
                </View>
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Type</Text>
                    <TextInput
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {type}
                        onChangeText = {(text)=> (dispatch(setUsedType(text)))}
                        maxLength = {12}
                    />
                </View>
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Price</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {price + ''}
                        onChangeText = {(text)=> (dispatch(setUsedPrice(text)))}
                        keyboardType = "numeric"
                        maxLength = {7}
                    />
                </View>

                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Status</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {status}
                        onChangeText = {(text)=> (dispatch(setUsedStatus(text)))}
                        maxLength = {4}
                    />
                </View>
                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Rating</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {rating + ''}
                        onChangeText = {(text)=> (dispatch(setUsedRating(text)))}
                        keyboardType = "number-pad"
                        maxLength = {2}
                    />
                </View>
                <View style = {globalStyles.detailComment}>
                    <Text style = {globalStyles.detailTextComment}>Comment</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {comment}
                        onChangeText = {(text)=> (dispatch(setUsedComment(text)))}
                        multiline = {true}
                        numberOfLines = {8}
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
                            onValueChange = {(val)=>(dispatch(setUsedDay(val)))} 
                            value = {day} 
                            disabled= {!editable}
                        />
                    </View>
                    <View style = {globalStyles.detailSwitch}>
                        <Text style = {globalStyles.detailText}>Night</Text>
                        <Switch 
                            onValueChange = {(val)=>(dispatch(setUsedNight(val)))} 
                            value = {night} 
                            disabled = {!editable}
                        />
                    </View>
                </View>
               
                {!editable && (
                    <View style = {globalStyles.detailSwitches}>
                        <TouchableOpacity
                            style = {globalStyles.detailButton}
                            onPress = {() => (setEditable(true))}
                        >
                            <Text style = {globalStyles.detailButtonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {editable && (
                    <View  style = {globalStyles.detailSwitches}>
                        <TouchableOpacity
                            style = {globalStyles.detailButton}
                            onPress = {() => {
                                editData();
                                navigation.goBack();
                            }}
                        >
                            <Text style = {globalStyles.detailButtonText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {globalStyles.detailButton}
                            onPress = {() => (navigation.goBack())}
                        >
                            <Text style = {globalStyles.detailButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )}    

            </ScrollView>
        </TouchableWithoutFeedback>
    );

};

export default UsedEditMode;