import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View,Text, FlatList } from 'react-native' ;
import albumdetaille from "../data/albumdetaille";
 import SongItemList from "../components/SongItemList";




const AlbumScreen =()=>{

    const route = useRoute();

    useEffect(()=>{console.log(route);},[])

    return (
    <View>
        <Text style={{color:'white'}}>HELLo</Text>
       
        <FlatList
        data={albumdetaille.songs}
        renderItem={({item})=><SongItemList song={item}/>}
        keyExtractor={(item)=>item.id}
        />
    </View>)
}
export default AlbumScreen;