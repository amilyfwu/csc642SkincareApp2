//Edit mode will overwrite the data
// Title
// Type
// Price
// Status
// Rate
// Comment
//Input cannot be blank except for Comment

import React from 'react';
import { Text, View, Button, TextInput, Switch } from 'react-native';
import { fakeData } from '../../data/fakeData';
import {styles} from '../../style/styles';
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
                editable = {editable} 
                value = {title}
                onChangeText = {(text)=> (dispatch(setTitle(text)))}
                maxLength = {30}
            />
            <TextInput
                style = {styles.textBorder} 
                editable = {editable} 
                value = {type}
                onChangeText = {(text)=> (dispatch(setType(text)))}
                maxLength = {12}
             />
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {price + ''}
                onChangeText = {(text)=> (dispatch(setPrice(text)))}
                keyboardType = "numeric"
                maxLength = {7}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {status}
                onChangeText = {(text)=> (dispatch(setStatus(text)))}
                maxLength = {4}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {rating + ''}
                onChangeText = {(text)=> (dispatch(setRating(text)))}
                keyboardType = "number-pad"
                maxLength = {2}
            />
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {comment}
                onChangeText = {(text)=> (dispatch(setComment(text)))}
                multiline = {true}
                numberOfLines = {8}
            />

            <Text>Day{day+''}</Text>
            <Switch 
                onValueChange = {(val)=>(dispatch(setDay(val)))} 
                value = {day} 
                disabled= {!editable}
            />

            <Text>Night</Text>
            <Switch 
                onValueChange = {(val)=>(dispatch(setNight(val)))} 
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

export default EditMode;