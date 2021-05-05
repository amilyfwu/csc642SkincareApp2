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
    },
    detail: {
      flexDirection: "row",
      padding: 10,
      width: "87%"
    },
    detailSwitches: {
      //paddingRight: 100,
      flexDirection: "row",
      padding: 10,
      width: "100%",
      justifyContent: "center",
    },
    detailSwitch: {
      flexDirection: "row",
      padding: "5%",
    },
    detailComment: {
      padding: 10,
    },
    detailText: {
      fontSize: 22,
      marginRight: 15,
    },
    detailTextComment: {
      fontSize: 22,
      marginBottom: 10,
    },
    detailTextInput: {
      fontSize: 22,
      backgroundColor: "#e5e5e5",
      borderRadius: 10,
      paddingHorizontal:10,
      //width: "90%",
    },
    detailButton: {
      borderRadius: 10,
      backgroundColor:"#bdb6ea",
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginHorizontal: 30,
    },
    detailButtonText: {
      fontSize: 22,
    },
    detailScroll : {
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    
    
}); 
