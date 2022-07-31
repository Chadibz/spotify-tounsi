import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
padding:20,
    },
    image:{
        width:200,
        height: 200 ,
        margin:10,

    },
    name:{
        marginTop:10,
        color:'white',
        fontSize: 30,
        fontWeight:'bold',
        
    },
    creator:{
        color:'lightgrey',
        margin:5,
        fontSize:16,
    },
    likes:{
        color:'lightgrey',
        margin:5,
        fontSize:16,
    },
    ContainerCreateur:{
flexDirection:'row',
margin:10,
    },
   
    button:{
backgroundColor:'#1CD05D',
height:50,
width:160,
borderRadius:50,
justifyContent:'center',
alignItems:'center',
    },
    buttontext:{
color:'white',
fontSize:20,
fontWeight:'bold',
    },
})
export default styles;