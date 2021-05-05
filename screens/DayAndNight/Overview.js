//List of all products for routine
//also need to add and remove products from the list
import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import {fakeData} from "../../data/fakeData";
import { globalStyles } from '../../style/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAll, setItems } from '../../redux/actions/dataAction';
import { useIsFocused } from '@react-navigation/core';
import {Ionicons} from '@expo/vector-icons';



const Overview = ({navigation,route}) => {
    //set remove mode component
    const [remove,setRemove] = React.useState(false);
    //grab data
    const items = useSelector(state => state.dataReducer.items);
    //filter data according to routine
    var filteredItems = items.filter((item) => {
        if(route.params.routine === "Both" && (route.params.day === item.day || route.params.night === item.night)){
            return item;
        }
        else if (route.params.day === item.day && route.params.routine === "Day"){
            return item;
        }
        else if(route.params.night === item.night && route.params.routine === "Night"){
            return item;
        }
    });
    //console.log(filteredItems);
    //refreshes the page when page is onFocus
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        // console.log("this is fake data", fakeData);
        // console.log("this is items", items);
        dispatch(setItems(fakeData));
        //filteredItems = items.filter((item) => route.params.day === item.day || route.params.night === item.night);
    },[]);//isFocused was here, I dont think it affect the items update
    
    //default render items
    const renderItem = ({item,index,separators}) => {
        //console.log(index,separators)
        //console.log("this is going to edit mode");
        var title = item.title.length > 22 ? item.title.substring(0,22).concat('...') : item.title;
        return (
            <View>
                <TouchableOpacity
                    key = {index}
                    onPress = {() => {
                        dispatch(setAll(item.title, item.type, item.price, item.status, item.rating, item.comment, item.day, item.night, item.dateEntered, item.id));
                        navigation.push("Edit Mode");
                    }}
                    style = {globalStyles.listBorder}
                >
                    <Text style = {globalStyles.listText}>{title}</Text>
                    <Ionicons name = "chevron-forward" size = {40} color = 'black' style = {globalStyles.arrowRight}></Ionicons>
                </TouchableOpacity>
            </View>
        );
    };

    //render only when deleting items
    const renderItemRemove = ({item,index,separators}) => {
        //console.log(index,separators)
        //console.log("this is going to delete");
        var title = item.title.length > 22 ? item.title.substring(0,22).concat('...') : item.title;
        return (
            <View>
                <TouchableOpacity
                    key = {index}
                    onPress = {() => {
                        console.log('remove item ' + item.title)
                        //finds the item
                        const findItem =  fakeData.find(element => element.id === item.id);
                        const removeItem = fakeData.indexOf(findItem);
                        fakeData.splice(removeItem,1);
                    }}
                    style = {globalStyles.listBorder}
                >
                    <Text style = {globalStyles.listText}>{title}</Text>
                    <Ionicons name = "chevron-forward" size = {40} color = 'black' style = {globalStyles.arrowRight}></Ionicons>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            {/* {route.params.day && <Text>This is day</Text>}
            {route.params.night && <Text>This is Night</Text>} */}
            {remove && (
                <TouchableOpacity
                    style = {globalStyles.button2}
                    onPress = {() => {setRemove(false)}}
                    >
                    <Text style = {globalStyles.text2}>Done</Text>
                </TouchableOpacity>
            )}
            {!remove && (
                <View style = {globalStyles.plusminusButton}>
                    <TouchableOpacity
                        style = {globalStyles.plus}
                        onPress = {()=> (navigation.push("Add Mode"))}
                    >
                        <Text style = {globalStyles.plusminusText}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {globalStyles.minus}
                        onPress = {() => (setRemove(true))}
                    >
                        <Text style = {globalStyles.plusminusText}>-</Text>
                    </TouchableOpacity>

                </View>
            )}
            {!remove && (
                <FlatList
                    data = {filteredItems}
                    renderItem = {renderItem}
                    keyExtractor = {(item) => item.id}
                    extraData = {isFocused}
                    contentContainerStyle = {globalStyles.listBottom}
                />
            )}
            {remove && (
                <FlatList
                    data = {filteredItems}
                    renderItem = {renderItemRemove}
                    keyExtractor = {(item) => item.id}
                    extraData = {isFocused}
                    contentContainerStyle = {globalStyles.listBottom}
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