import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBorder:{
        borderColor:'grey',
        borderWidth: 2,
        padding: 10,
        width:'80%',
    },
    buttonSpace: {
      margin:'1%',
      // padding: '10%',
    },
    font: {
      fontSize: 48,
  }
}); 
