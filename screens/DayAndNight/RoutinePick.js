import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles} from '../../style/styles';

const RoutinePick = ({navigation}) => {
    //Pick Routine
    //onPress = {()=>{navigation.navigate('Overview',{routine:"Night"})}}
    return(
        <View style = {globalStyles.container}>
            <TouchableOpacity 
                style = {globalStyles.button2}
                onPress = {()=>{navigation.push("Overview",{day:true, night:false, routine:"Day"})}}
            >
                <Text style = {globalStyles.text2}>☀️</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style = {globalStyles.button2}
                onPress = {()=>{navigation.push("Overview",{day:false, night:true, routine:"Night"})}}
            >
                <Text style = {globalStyles.text2}>🌙</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {globalStyles.button2}
                onPress = {()=>{navigation.push("Overview",{day:true, night:true, routine: "Both"})}}
            >
                <Text style = {globalStyles.text2}>☀️🌙</Text>
            </TouchableOpacity>

        </View>
    );
};


export default RoutinePick;