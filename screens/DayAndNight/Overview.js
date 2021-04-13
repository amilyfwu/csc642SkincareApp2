//List of all products for routine
//also need to add and remove products from the list
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {fakeData} from "../../fakeData";

const Overview = ({navigation,route}) => {
    const renderItem = ({item,index,separators}) => {
        console.log(item,index,separators)
        return (
            <Button 
                key = {index} 
                title = {item.title}
                onPress = {() => (navigation.push("Product Detail", item))}
            />
        );
    }
    return (
        <View>
            {route.params.routine && <Text>This is {route.params.routine}</Text> }
            <View>
                <FlatList
                    data = {fakeData}
                    renderItem = {renderItem}
                    keyExtractor = {(item,i) => item.title + i}
                />
                {/* {fakeData.map((value,i)=>{
                    return (
                        <View key = {i}>
                            <Text>{value.title}</Text>
                            <Button onPress = {() => (navigation.push("Product Detail", value))}></Button>
                        </View>
                    );
                })} */}
            </View>
        </View>
    );
}

export default Overview;