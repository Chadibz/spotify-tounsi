import React from "react";
import { Text,View,Image ,TouchableOpacity} from "react-native";
import { Album } from "../../types";
import styles from "./styles";


export type AlbumHeaderProps ={
    album:Album;
}

const AlbumHeader =(props :AlbumHeaderProps)=>{
    const {album}=props;
    return(

        <View style={styles.container}>
            
            <Image source={{uri:album.imageurl}} style={styles.image}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.ContainerCreateur}>
                <Text style={styles.creator} >BY {album.by}</Text>
                <Text style={styles.likes}>{album.numberOflikes}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}
export default AlbumHeader;