//Edit mode will overwrite the data
// Title
// Type
// Price
// Status
// Rate
// Comment
//Input cannot be blank except for Comment

import React from 'react';
import { Text, View, Button, TextInput, Switch, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { fakeData } from '../../data/fakeData';
import {globalStyles} from '../../style/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle,setType,setComment,setPrice,setStatus,setRating, setDay,setNight } from '../../redux/actions/dataAction';


const EditMode = ({navigation, route}) => {
    //console.log(navigation);
    //save
    //cancel - go back or navigate to product detail
    //use Array function to sort or update the values
    // const [title , setTitle] = React.useState(route.params.title);
    // const [type , setType] = React.useState(route.params.type);
    // const [price , setPrice] = React.useState(route.params.price);
    // const [status , setStatus] = React.useState(route.params.status);
    // const [rating , setRating] = React.useState(route.params.rating);
    // const [comment , setComment] = React.useState(route.params.comment);
    // const [day , setDay] = React.useState(route.params.day);
    // const [night , setNight] = React.useState(route.params.night);
    // const [dateEntered , setDateEntered] = React.useState(route.params.dateEntered);
    // const [id, setId] = React.useState(route.params.id);

    const [editable,setEditable] = React.useState(false);

    const title = useSelector(state => state.dataReducer.title);
    const type = useSelector(state => state.dataReducer.type);  
    const price = useSelector(state => state.dataReducer.price);
    const status = useSelector(state => state.dataReducer.status);
    const rating = useSelector(state => state.dataReducer.rating);
    const comment = useSelector(state => state.dataReducer.comment);
    const day = useSelector(state => state.dataReducer.day);
    const night = useSelector(state => state.dataReducer.night);
    const dateEntered= useSelector(state => state.dataReducer.dateEntered);
    const id = useSelector(state => state.dataReducer.id);
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
        const findItem =  fakeData.find(element => {
            if(element.id === id){
                //console.log(element);
                return element.id;
            }
        })
        const replaceItem = fakeData.indexOf(findItem);
        //console.log(replaceItem);
        fakeData.splice(replaceItem, 1, updateData);
        //console.log("Updated Data:", fakeData);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible ={false}>
            <ScrollView contentContainerStyle = {globalStyles.detailScroll}>
                {/* <TextInput
                    style = {styles.IdetailTextInput} 
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
                        onChangeText = {(text)=> (dispatch(setTitle(text)))}
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
                        onChangeText = {(text)=> (dispatch(setType(text)))}
                        maxLength = {12}
                    />
                </View>
                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Price</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {price + ''}
                        onChangeText = {(text)=> (dispatch(setPrice(text)))}
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
                        onChangeText = {(text)=> (dispatch(setStatus(text)))}
                        maxLength = {4}
                    />
                </View>
                
                <View style = {globalStyles.detail}>
                    <Text style = {globalStyles.detailText}>Rating</Text>
                    <TextInput 
                        style = {globalStyles.detailTextInput} 
                        editable = {editable} 
                        value = {rating + ''}
                        onChangeText = {(text)=> (dispatch(setRating(text)))}
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
                        onChangeText = {(text)=> (dispatch(setComment(text)))}
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
                            onValueChange = {(val)=>(dispatch(setDay(val)))} 
                            value = {day} 
                            disabled= {!editable}
                        />
                    </View>

                    <View style = {globalStyles.detailSwitch}>
                        <Text style = {globalStyles.detailText}>Night</Text>
                        <Switch 
                            onValueChange = {(val)=>(dispatch(setNight(val)))} 
                            value = {night} 
                            disabled = {!editable}
                        />
                    </View>
                </View>
                
                {!editable && (
                    <View style = {globalStyles.detailSwitches}>
                        {/* <Button 
                            title = "Edit" 
                            onPress = {() => (setEditable(true))}
                        /> */}
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

export default EditMode;