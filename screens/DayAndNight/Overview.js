//List of all products for routine
//also need to add and remove products from the list
import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import {fakeData} from "../../fakeData";
import { styles } from '../../style/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAll, setItems } from '../../redux/actions/dataAction';
import { useIsFocused } from '@react-navigation/core';


const Overview = ({navigation,route}) => {
    //set remove mode component
    const [remove,setRemove] = React.useState(false);
    //grab data
    const items = useSelector(state => state.dataReducer.items);
    //filter data according to routine
    var filteredItems = items.filter((item) => route.params.day === item.day || route.params.night === item.night);
    //console.log(filteredItems);
    //refreshes the page when page is onFocus
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        // console.log("this is fake data", fakeData);
        // console.log("this is items", items);
        dispatch(setItems(fakeData));
    },[]);//isFocused was here, I dont think it affect the items update
    
    //default render items
    const renderItem = ({item,index,separators}) => {
        //console.log(index,separators)
        console.log("this is going to edit mode");
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        dispatch(setAll(item.title, item.type, item.price, item.status, item.rating, item.comment, item.day, item.night, item.dateEntered, item.id));
                        navigation.push("Edit Mode");
                    }}
                />
            </View>
        );
    };

    //render only when deleting items
    const renderItemRemove = ({item,index,separators}) => {
        //console.log(index,separators)
        //console.log("this is going to delete");
        return (
            <View style = {styles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        console.log('remove item ' + item.title)
                        //finds the item
                        const findItem =  fakeData.find(element => element.id === item.id);
                        const removeItem = fakeData.indexOf(findItem);
                        fakeData.splice(removeItem,1);
                    }}
                />
            </View>
        );
    };

    return (
        <View style = {styles.container}>
            {route.params.day && <Text>This is day</Text>}
            {route.params.night && <Text>This is Night</Text>}

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
            {!remove && (
                <FlatList
                    data = {filteredItems}
                    renderItem = {renderItem}
                    keyExtractor = {(item) => item.id}
                    extraData = {isFocused}
                />
            )}
            {remove && (
                <FlatList
                    data = {filteredItems}
                    renderItem = {renderItemRemove}
                    keyExtractor = {(item) => item.id}
                    extraData = {isFocused}
                />
            )}
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
            
        </View>
    );
}

export default Overview;