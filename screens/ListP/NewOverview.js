import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../../style/styles';
import {fakeNewData} from '../../data/fakeNewData';
import { setNewAll, setNewItems } from '../../redux/actions/newDataAction';
import { useIsFocused } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';



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
        var title = item.title.length > 22 ? item.title.substring(0,22).concat('...') : item.title;
        return (
            <View>
                <TouchableOpacity
                    style = {globalStyles.listBorder}
                    key = {index} 
                    onPress = {() => {
                        dispatch(setNewAll(item.title, item.type, item.price, item.id));
                        navigation.push("New Edit Mode");
                    }}
                >
                    <Text style = {globalStyles.listText}>{title}</Text>
                    <Ionicons name = "chevron-forward" size = {40} color = 'black' style = {globalStyles.arrowRight}></Ionicons>
                </TouchableOpacity>
            </View>
        );
    };

    const renderItemRemove = ({item, index}) => {
        var title = item.title.length > 22 ? item.title.substring(0,22).concat('...') : item.title;
        return (
            <View>
                <TouchableOpacity
                    style = {globalStyles.listBorder}
                    key = {index} 
                    onPress = {() => {
                        console.log('remove item ' + item.title)
                        //finds the item
                        const findItem =  fakeNewData.find(element => element.id === item.id)
                        const removeItem = fakeNewData.indexOf(findItem);
                        fakeNewData.splice(removeItem,1);
                    }}
                >
                    <Text style = {globalStyles.listText}>{title}</Text>
                    <Ionicons name = "chevron-forward" size = {40} color = 'black' style = {globalStyles.arrowRight}></Ionicons>
                </TouchableOpacity>
            </View>
        );
    };
    return(
        <View>
            {remove && (
                <View style = {globalStyles.detailSwitches}>
                    <TouchableOpacity
                        style = {globalStyles.detailButton}
                        onPress = {() => {setRemove(false)}}
                    >
                        <Text style = {globalStyles.detailButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
                
            )}
            {!remove && (
                <View style = {globalStyles.plusminusButton}>
                    <TouchableOpacity
                        style = {globalStyles.plus}
                        onPress = {()=> (navigation.push("New Add Mode"))}
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
                        data = {items}
                        renderItem = {renderItem}
                        keyExtractor = {(item) => item.id}
                        extraData = {isFocused}
                        contentContainerStyle = {globalStyles.listBottom}
                    />
            )}
            {remove && (
                <FlatList
                    data = {items}
                    renderItem = {renderItemRemove}
                    keyExtractor = {(item) => item.id}
                    extraData = {isFocused}
                    contentContainerStyle = {globalStyles.listBottom}                
                />
            )}
        </View>
    );

};

export default NewOverview;