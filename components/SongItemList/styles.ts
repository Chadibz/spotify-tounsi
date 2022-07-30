import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    margin :10,
   },
    title:{
        color:'white',
        fontSize: 20,
        fontWeight:'500',

    },
    image:{
        width:60,
        height: 60,

    },
    artist:{
        
        color:'lightgrey',
        fontSize: 15,
    },
    containerRight:{
        justifyContent: 'space-around',
        marginLeft: 15,
    }
})
export default styles;