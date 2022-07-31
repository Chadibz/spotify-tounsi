import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View,Text, FlatList } from 'react-native' ;
import albumdetaille from "../data/albumdetaille";
 import SongItemList from "../components/SongItemList";
 import AlbumHeader from "../components/AlbumHeader";
import PlayerWidget from "../components/palyerWidget";






const AlbumScreen =()=>{

    const route = useRoute();

    useEffect(()=>{console.log(route);},[])
   
    return (
        
    <View>
      
       
        <FlatList
        
        data={albumdetaille.songs}
        renderItem={({item})=><SongItemList song={item}/>}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={()=> <AlbumHeader album={albumdetaille}/>}
        />
    </View>)





}

export default AlbumScreen;

