import React from "react";
 import { Text ,View, Image} from 'react-native';
import { Song } from "../../types";
import styles from "./styles";

 export type SongItemList ={
    song: Song
 }
 const SongItemList =(props:SongItemList) =>{
    const {song}=props;
return (
    <View style={styles.container}>
         <Image source={{uri:song.imageurl}} style={styles.image }/>
         <View style={styles.containerRight}>
<Text style={styles.title}>{song.title}</Text>
<Text style={styles.artist}>{song.artist}</Text>
</View>
    </View>
)
 }
 export default SongItemList;