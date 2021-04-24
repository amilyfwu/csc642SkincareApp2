import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../style/styles';
import {fakeNewData} from '../../fakeNewData';
import { setNewPrice, setNewTitle, setNewType } from '../../redux/actions/newDataAction';

const NewEditMode = ({navigation,route}) => {

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

    return(
        <View style = {styles.container}>
            <Text>new Edit mode</Text>
            
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {title}
                onChangeText = {(text)=> (dispatch(setNewTitle(text)))}
                maxLength = {30}
            />
            <TextInput
                style = {styles.textBorder} 
                editable = {editable} 
                value = {type}
                onChangeText = {(text)=> (dispatch(setNewType(text)))}
                maxLength = {12}
             />
            <TextInput 
                style = {styles.textBorder} 
                editable = {editable} 
                value = {price + ''}
                onChangeText = {(text)=> (dispatch(setNewPrice(text)))}
                keyboardType = "numeric"
                maxLength = {7}
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

export default NewEditMode;