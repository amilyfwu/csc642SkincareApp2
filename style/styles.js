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
    font1: {
      fontSize: 43,
      textAlign:"center",  
    },
    button1: {
      //make buttons spread out
      margin:10,
      borderRadius: 10,
      backgroundColor: '#bdb6ea',
      color: '#bdb6ea'
    },
    text1: {
      width: 300,
      padding: 10,
      fontSize: 40,
      textAlign:"center",
      textAlignVertical:"center",
    },
    button2: {
      margin:15,
      borderRadius: 10,
      backgroundColor: '#bdb6ea',
      color: '#bdb6ea'
    },
    text2: {
      width: 320,
      padding: 15,
      fontSize: 48,
      textAlign:"center",
      textAlignVertical:"center",
    },
    button3: {
      margin:15,
      borderRadius: 10,
      backgroundColor: '#bdb6ea',
      color: '#bdb6ea'
    },
    text3: {
      width: 320,
      padding: 25,
      fontSize: 25,
      textAlign:"center",
      textAlignVertical:"center",
    }
    
}); 
