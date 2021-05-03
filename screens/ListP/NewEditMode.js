import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../../style/styles';
import {fakeNewData} from '../../data/fakeNewData';
import { setNewItems, setNewPrice, setNewTitle, setNewType } from '../../redux/actions/newDataAction';
import { fakeData } from '../../data/fakeData';

const NewEditMode = ({navigation}) => {

    const [editable,setEditable] = React.useState(false);

    const title = useSelector(state => state.newDataReducer.title);
    const type = useSelector(state => state.newDataReducer.type);
    const price = useSelector(state => state.newDataReducer.price);
    const id = useSelector(state => state.newDataReducer.id);

    const dispatch = useDispatch();

    const editData = () => {
        const updateData = {
            'title': title,
            'type': type,
            'price': parseFloat(price),
            'id': id,
        };
        const findItem =  fakeNewData.find(element => element.id === id);
        const replaceItem = fakeNewData.indexOf(findItem);
        //console.log(findItem, replaceItem);
        fakeNewData.splice(replaceItem, 1, updateData);
    };

    const moveData = (prop) => {
        console.log(prop);
        const tempDate = Date.now();
        const today = new Date(tempDate);
        var day = false;
        var night = false;
        switch (prop){
            case "☀️":
                day = true;
                break;
            case "🌙":
                night = true;
                break;
            case "☀️🌙":
                day = true;
                night = true;
                break;
        };

        const defaultData = {
            'title': title,
            'type': type,
            'price': parseFloat(price),
            'status': "N/A",
            'rating': 0,
            'comment': '',
            'day': day,
            'night': night,
            'dateEntered': today.toLocaleDateString(),
            'id': id,
        };

        console.log(defaultData);
        //add to fakeData
        fakeData.push(defaultData);
        //remove from fakeNewData
        const findItem =  fakeNewData.find(element => element.id === id);
        const removeItem = fakeNewData.indexOf(findItem);
        console.log(findItem, removeItem);
        fakeNewData.splice(removeItem, 1);
    };

    return(
        <View style = {globalStyles.container}>
            <Text>new Edit mode</Text>
            
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {title}
                onChangeText = {(text)=> (dispatch(setNewTitle(text)))}
                maxLength = {30}
            />
            <TextInput
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {type}
                onChangeText = {(text)=> (dispatch(setNewType(text)))}
                maxLength = {12}
             />
            <TextInput 
                style = {globalStyles.textBorder} 
                editable = {editable} 
                value = {price + ''}
                onChangeText = {(text)=> (dispatch(setNewPrice(text)))}
                keyboardType = "numeric"
                maxLength = {7}
            />

            {!editable && (
                <View>
                    <Button 
                        title = "Edit" 
                        onPress = {() => (setEditable(true))}
                    />
                    <Button
                        title = "Add to ☀️"
                        onPress = {() => {
                            moveData("☀️");
                            navigation.goBack();
                        }}
                    />
                    <Button
                        title = "Add to 🌙"
                        onPress = {() => {
                            moveData("🌙");
                            navigation.goBack();
                        }}
                    />
                    <Button
                        title = "Add to ☀️🌙"
                        onPress = {() =>{
                            moveData("☀️🌙");
                            navigation.goBack();
                        }}
                    />
                    
                </View>
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

export default NewEditMode;