import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles} from '../../style/styles';

const RoutinePick = ({navigation}) => {
    //Pick Routine
    //onPress = {()=>{navigation.navigate('Overview',{routine:"Night"})}}
    return(
        <View style = {globalStyles.container}>
            <Button
                title = "☀️"
                onPress = {()=>{navigation.push("Overview",{day:true, night:false, routine:"Day"})}}
            />
            <Button 
                title = "🌙"
                onPress = {()=>{navigation.push("Overview",{day:false, night:true, routine:"Night"})}}
            />
            <Button 
                title = "☀️🌙"
                onPress = {()=>{navigation.push("Overview",{day:true, night:true, routine: "Both"})}}
            />
        </View>
    );
};


export default RoutinePick;