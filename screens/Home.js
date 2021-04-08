import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <Text>This is Home Screen</Text>
            <Button 
                title = "Go to Details screen"
                onPress = {() => navigation.navigate("Detail")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
}); 

export default Home;