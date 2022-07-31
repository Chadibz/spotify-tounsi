import React from "react";
 import { Text ,View, Image} from 'react-native';
 import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Song } from "../../types";
import styles from "./styles";
import { useEffect } from "react";
import { Audio } from "expo-av";
import { useState } from "react";



const song={
    id:'1',
    uri:'https://storage.googleapis.com/synchedin-storage/public/tracks/GX5MY2166332/GX5MY2166332.mp3',
    imageurl :'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888',
    title:'what they want',
    artist:'RUSS'
}

 const PlayerWidget =() =>{
    const [sound,setSound]=useState<Sound|null>(null)
const onPlaybackStatusUpdate=(status)=>{console.log(status);}

    const playCurrentSong= async()=>{
const {sound:newSound}=await Sound.createAsync({uri:song.uri},
    {shouldPlay:true},
    onPlaybackStatusUpdate
    )
    setSound(newSound)
    }

  useEffect(()=>{
playCurrentSong
  },[])

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