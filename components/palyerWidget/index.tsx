import React from "react";
 import { Text ,View, Image} from 'react-native';
 import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Song } from "../../types";
import styles from "./styles";

const song={
    id:'1',
    imageurl :'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888',
    title:'MATRABINA',
    artist:'SAMARA'
}

 const PlayerWidget =() =>{
  
return (
    <View style={styles.container}>
         <Image source={{uri:song.imageurl}} style={styles.image }/>

         <View style={styles.containerRight}>
        <View style={styles.namecontainer}>

<Text style={styles.title}>{song.title}</Text>
<Text style={styles.artist}>{song.artist}</Text>
</View> 
<View style={styles.iconcontainer}>
<AntDesign name="hearto" size={30} color={"white"}/>
<FontAwesome  name="play" size={30} color={"white"}/>
</View> 
</View>
    </View>
)
 }
 export default PlayerWidget;