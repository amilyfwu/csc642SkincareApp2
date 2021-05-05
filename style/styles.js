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
    },
    buttonSpace: {
      margin:'1%',
      flexDirection:"row",
      // padding: '10%',
    },
    plus: {
      borderRadius: 25,
      backgroundColor:"#a7eb87",
      marginRight: 15,
      marginVertical: 15,
    },
    minus:{
      backgroundColor:"#f67070",
      borderRadius: 25,
      marginLeft: 15,
      marginVertical: 15,
      
    },
    plusminusText:{
      fontSize:40,
      height:50,
      width:50,
      textAlign:"center",
      textAlignVertical:"center",
    },
    plusminusButton:{
      flexDirection:"row",
      paddingLeft:"32%",
    },
    listText: {
      fontSize: 24,
      width : '100%',
      padding: 20,
      //paddingRight: '12%',
    },
    listBorder: {
      borderBottomWidth: 1,
      borderBottomColor:'#c4c3d0',
      flexDirection: "row",
      
    },
    listBottom: {
      //for scrolling all the way down
      paddingBottom: "30%",
    },
    arrowRight: {
      position: "absolute",
      marginLeft: 310,
      marginTop:15,
    }
    
}); 
