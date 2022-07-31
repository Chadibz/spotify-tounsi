import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
   container:{
    position:'absolute',
    bottom:39,
    flexDirection:'row',
    backgroundColor:'#131313',
    marginBottom :10,
    width:'100%',
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
   },
    title:{
        color:'white',
        fontSize: 20,
        fontWeight:'500',
        margin:10,

    },
    image:{
        width:60,
        height: 60,
margin:10,
    },
    artist:{
        
        color:'lightgrey',
        fontSize: 15,
    },
    containerRight:{
        flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
    },
    namecontainer:{
flexDirection:'row',
alignItems:'center'
    },
    iconcontainer:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'space-around',
    },
})
export default styles;