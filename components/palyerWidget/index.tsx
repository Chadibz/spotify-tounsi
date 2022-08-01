import React from "react";
 import { Text ,View, Image, Touchable, TouchableOpacity} from 'react-native';
 import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Song } from "../../types";
import styles from "./styles";
import { useEffect } from "react";
import { Audio } from "expo-av";
import { useState } from "react";


const song={
    id:'1',
    uri:'https://cdn1.esm3.com/music/4558/m298181.mp3',
    imageurl :'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888',
    title:'what they want',
    artist:'RUSS'
}

 const PlayerWidget =() =>{
    const [sound,setSound]=useState<Sound|null>(null);
    const [isPlaying,setIsPlaying] =useState<boolean>(true);
    const [duration,setDuration]=useState<number|null>(null);
    const [position,setPosition]=useState<number|null>(null);

const onPlaybackStatusUpdate=(status)=>{
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    
    
    }

    const playCurrentSong= async()=>{
if(sound){
    await sound.unloadAsync();
}

const {sound:newSound}=await Audio.Sound.createAsync(
     {uri:song.uri},
    {shouldPlay:isPlaying},
    onPlaybackStatusUpdate
    )
    setSound(newSound)
    }

  useEffect(()=>{
playCurrentSong();
  },[])
const onPlayPausePress= async ()=>{
if (!sound){
    return;
}
if (isPlaying){
    await sound.stopAsync()
} else {
    await sound.playAsync();
}


    
}
const getProgress=()=>{
    if(sound==null || duration==null ||position==null){
            return 0;
    }
    return(position/duration)*100;
}
return (
    <View style={styles.container}>
        <View style={[styles.Progress,{width:`${getProgress()}%`},]}  />

        <View style={styles.row}>
         <Image source={{uri:song.imageurl}} style={styles.image }/>
         <View style={styles.containerRight}>
        <View style={styles.namecontainer}>

<Text style={styles.title}>{song.title}</Text>
<Text style={styles.artist}>{song.artist}</Text>
</View> 
<View style={styles.iconcontainer}>
<AntDesign name="hearto" size={30} color={"white"}/>
<TouchableOpacity onPress={onPlayPausePress}>
<FontAwesome  name={isPlaying ? 'pause':'play'} size={30} color={"white"}/>
</TouchableOpacity>
</View> 
</View>
</View>
    </View>
)
 }
 export default PlayerWidget;