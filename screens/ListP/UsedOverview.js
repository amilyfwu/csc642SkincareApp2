import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { globalStyles } from '../../style/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setUsedAll, setUsedItems } from '../../redux/actions/usedDataAction';
import {fakeData} from "../../data/fakeData";
import { useIsFocused } from '@react-navigation/core';



const UsedOverview = ({navigation,route}) => {
    //console.log(navigation,route);
    const items = useSelector(state => state.usedDataReducer.items);
    const isFocused = useIsFocused();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUsedItems(fakeData));
    },[]);
    
    const renderItem = ({item, index}) => {
        return (
            <View style = {globalStyles.buttonSpace}>
                <Button 
                    key = {index} 
                    title = {item.title}
                    onPress = {() => {
                        dispatch(setUsedAll(item.title, item.type, item.price, item.status, item.rating, item.comment, item.day, item.night, item.dateEntered, item.id));
                        navigation.push("Used Edit Mode");
                    }}
                />
            </View>
        );
    };

    return(
        <View style = {globalStyles.container}>
            <Text>This is Used Screen</Text>
            <FlatList
                data = {items}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
                extraData = {isFocused}
            />
        </View>
    );
};


export default UsedOverview;