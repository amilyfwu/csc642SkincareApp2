import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../../style/styles';

const ListPick = ({navigation}) => {

    return(
        <View style = {globalStyles.container}>
            <Text>This is List Screen</Text>
            <Button 
                title = "New Products"
                onPress = {() => navigation.push("New")}
            />
            <Button 
                title = "Old/Used Products"
                onPress = {() => navigation.push("Used", {new:false, old:true})}
            />
        </View>
    );
};

export default ListPick;