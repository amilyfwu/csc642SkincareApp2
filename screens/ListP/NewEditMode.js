import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../style/styles';
import {fakeNewData} from '../../fakeNewData';

const NewEditMode = ({navigation,route}) => {

    return(
        <View>
            <Text>new Edit mode</Text>
            
        </View>
    );
         
};

export default NewEditMode;