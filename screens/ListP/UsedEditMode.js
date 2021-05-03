import React from 'react';
import { Text, View, Button, TextInput, Switch } from 'react-native';
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
        <View style = {globalStyles.container}>
            {/* <TextInput
                style = {globalStyles.TextBorder} 
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
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {title}
                onChangeText = {(text)=> (dispatch(setUsedTitle(text)))}
                maxLength = {30}
            />
            <TextInput
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {type}
                onChangeText = {(text)=> (dispatch(setUsedType(text)))}
                maxLength = {12}
             />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {price + ''}
                onChangeText = {(text)=> (dispatch(setUsedPrice(text)))}
                keyboardType = "numeric"
                maxLength = {7}
            />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {status}
                onChangeText = {(text)=> (dispatch(setUsedStatus(text)))}
                maxLength = {4}
            />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {rating + ''}
                onChangeText = {(text)=> (dispatch(setUsedRating(text)))}
                keyboardType = "number-pad"
                maxLength = {2}
            />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {comment}
                onChangeText = {(text)=> (dispatch(setUsedComment(text)))}
                multiline = {true}
                numberOfLines = {8}
            />

            <Text>Day{day+''}</Text>
            <Switch 
                onValueChange = {(val)=>(dispatch(setUsedDay(val)))} 
                value = {day} 
                disabled= {!editable}
            />

            <Text>Night</Text>
            <Switch 
                onValueChange = {(val)=>(dispatch(setUsedNight(val)))} 
                value = {night} 
                disabled = {!editable}
            />

            {!editable && (
                <Button 
                    title = "Edit" 
                    onPress = {() => (setEditable(true))}
                />
            )}
            {editable && (
                <View>
                    <Button 
                        title = "Save" 
                        onPress = {() => {
                            editData();
                            navigation.goBack();
                        }}
                    /> 
                    <Button 
                        title = "Cancel" 
                        onPress = {() => (navigation.goBack())}
                    />
                </View>
            )}  

        </View>
    );

};

export default UsedEditMode;