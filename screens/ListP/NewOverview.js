import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../style/styles';
import {fakeNewData} from '../../fakeNewData';
import { setNewAll, setNewItems } from '../../redux/actions/newDataAction';
import { useIsFocused } from '@react-navigation/core';



const NewOverview = ({navigation,route}) => {
    //console.log(navigation,route);

    const [remove,setRemove] = React.useState(false);
    const isFocused = useIsFocused();
    const items = useSelector(state => state.newDataReducer.items);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setNewItems(fakeNewData));
    },[]);

    const renderItem = ({item, index}) => {
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        dispatch(setNewAll(item.title, item.type, item.price, item.id));
                        navigation.push("New Edit Mode", item);
                    }}
                />
            </View>
        );
    };

    const renderItemRemove = ({item, index}) => {
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        console.log('remove item ' + item.title)
                        //finds the item
                        const findItem =  fakeNewData.find(element => {
                            if(element.id === item.id){
                                return element.id;
                            }
                        })
                        const removeItem = fakeNewData.indexOf(findItem);
                        fakeNewData.splice(removeItem,1);
                    }}
                />
            </View>
        );
    };

    return(
        <View style = {styles.container}>
            <Text>This is New Screen</Text>
            {remove && (
                <View style = {styles.buttonSpace}>
                    <Button title ="Done" onPress = {() => {setRemove(false)}}/>
                </View>
            )}
            {!remove && (
                <View style = {styles.buttonSpace}>
                    <Button title ="ADD" onPress = {()=> (navigation.push("New Add Mode"))}/>
                    <Button title ="REMOVE" onPress = {() => (setRemove(true))}/>
                </View>
            )}
            {!remove && isFocused && (
                    <FlatList
                        data = {items}
                        renderItem = {renderItem}
                        keyExtractor = {(item,i) => item.title + i}
                    />
            )}
            {remove && isFocused && (
                <FlatList
                    data = {items}
                    renderItem = {renderItemRemove}
                    keyExtractor = {(item,i) => item.title + i}
                />
            )}
        </View>
    );
};

export default NewOverview;