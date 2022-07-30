import React from "react";
import { View,Image,Text,TouchableOpacity ,TouchableWithoutFeedback} from "react-native";
import styles from './styles';
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";
export type AlbumProps ={
    album: Album,
}
   

const AlbumComponent = (props: AlbumProps) =>{
const navigation = useNavigation(); 

  const onPress = ()=>{
   navigation.navigate('AlbumScreen',{id:props.album.id})

   }  
return(
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
       
<Image source={{uri: props.album.imageurl}}  style={styles.image}/>
<Text  style={styles.text}>{props.album.artistHeadline}</Text>

    </View></TouchableOpacity>
)
}
export default AlbumComponent;   