//List of all products for routine
//also need to add and remove products from the list
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {fakeData} from "../../fakeData";

const dummyData = [];

// const List = (prop) => {
//     return(

//     );
// }

const Overview = ({navigation,route}) => {

    return (
        <View>
            {route.params.routine && <Text>This is {route.params.routine}</Text> }
            {/* <View>
                {dummyData.map((value, i)=>{
                    return (<Text key = {i} >{value}</Text>);
                })}
            </View> */}
            <View>
                {fakeData.map((value,i)=>{
                    return (
                        <View key = {i}>
                            <Text>{value.title}</Text>
                            <Button onPress = {() => (navigation.push("Product Detail", value))}></Button>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

export default Overview;