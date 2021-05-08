import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../style/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setUsedAll, setUsedItems } from '../../redux/actions/usedDataAction';
import {fakeData} from "../../data/fakeData";
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const UsedOverview = ({navigation,route}) => {
    //console.log(navigation,route);
    const items = useSelector(state => state.usedDataReducer.items);
    const isFocused = useIsFocused();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUsedItems(fakeData));
    },[isFocused, dispatch]);
    
    const renderItem = ({item, index}) => {
        var title = item.title.length > 22 ? item.title.substring(0,22).concat('...') : item.title;
        return (
            <TouchableOpacity
                    style = {globalStyles.listBorder}
                    key = {index} 
                    onPress = {() => {
                        dispatch(setUsedAll(item.title, item.type, item.price, item.status, item.rating, item.comment, item.day, item.night, item.dateEntered, item.id));
                        navigation.push("Used Edit Mode");
                    }}
                >
                    <Text  style = {globalStyles.listText}>{title}</Text>
                    <Ionicons name = "chevron-forward" size = {40} color = 'black' style = {globalStyles.arrowRight}></Ionicons>
            </TouchableOpacity>
        );
    };

    return(
        <View>
            <View style = {globalStyles.listBorder}>
                <Text style = {globalStyles.listText}>Used/Tried Products</Text>
            </View>
            <FlatList
                data = {items}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
                extraData = {isFocused}
                contentContainerStyle = {globalStyles.listBottom}
            />
        </View>
    );
};


export default UsedOverview;