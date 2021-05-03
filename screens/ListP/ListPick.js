import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../style/styles';

const ListPick = ({navigation}) => {

    return(
        <View style = {globalStyles.container}>
            <TouchableOpacity 
                style = {globalStyles.button3}
                onPress = {() => navigation.push("New")}
            >
                <Text style = {globalStyles.text3}>New Products</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {globalStyles.button3}
                onPress = {() => navigation.push("Used", {new:false, old:true})}
            >
                <Text style = {globalStyles.text3}>Used/Tried Products</Text>
            </TouchableOpacity>

        </View>
    );
};

export default ListPick;