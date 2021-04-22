//List of all products for routine
//also need to add and remove products from the list
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,ScrollView } from 'react-native';
import {fakeData} from "../../fakeData";
import { styles } from '../../style/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAll, setItems } from '../../redux/actions/dataAction';
import { useIsFocused } from '@react-navigation/core';


const Overview = ({navigation,route}) => {
    //set the add mode and remove mode components
    const [add,setAdd] = React.useState(false);
    const [remove,setRemove] = React.useState(false);
    const items = useSelector(state => state.dataReducer.items);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setItems(fakeData));
        console.log("this is fake data", fakeData);
        console.log("this is items", items);
    },[isFocused]);
    
    const renderItem = ({item,index,separators}) => {
        //console.log(index,separators)
        console.log("this is going to product detail");
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        dispatch(setAll(item.title, item.type, item.price, item.status, item.rating, item.comment, item.day, item.night, item.dateEntered, item.id));
                        navigation.push("Product Detail", item);
                    }}
                />
            </View>
        );
    };
    const renderItem2 = ({item,index,separators}) => {
        //console.log(index,separators)
        console.log("this is going to delete");
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        console.log('delete item ' + item.title)
                        //finds the item
                        const findItem =  fakeData.find(element => {
                            if(element.title === item.title){
                                return element.title;
                            }
                        })
                        const deleteItem = fakeData.indexOf(findItem);
                        fakeData.splice(deleteItem,1);
                    }}
                />
            </View>
        );
    };

    return (
        <View>
            {route.params.routine && <Text>This is {route.params.routine} {remove +''}</Text> }
            {remove && (
                <View style = {styles.buttonSpace}>
                    <Button title ="Done" onPress = {() => {setRemove(false)}}/>
                </View>
            )}
            {!remove && (
                <View style = {styles.buttonSpace}>
                    <Button title ="ADD" onPress = {()=> (navigation.push("Add Mode"))}/>
                    <Button title ="REMOVE" onPress = {() => (setRemove(true))}/>
                </View>
            )}
            <View>
                {/* <FlatList
                    data = {fakeData}
                    renderItem = {!remove ? renderItem : renderItem2}
                    keyExtractor = {(item,i) => item.title + i}
                /> */}
                {/* {fakeData.map((value,i)=>{
                    return (
                        <View key = {i}>
                            <Text>{value.title}</Text>
                            <Button onPress = {() => (navigation.push("Product Detail", value))}></Button>
                        </View>
                    );
                })} */}
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
                        renderItem = {renderItem2}
                        keyExtractor = {(item,i) => item.title + i}
                    />
                )}
            </View>

        </View>
    );
}

export default Overview;