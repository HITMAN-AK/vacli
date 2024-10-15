import {View,Text,TouchableOpacity} from "react-native"
import React from "react"
export function list(run:any,txt:String,subtxt:String,subtxt2?:String,subtxt3?:String){
    return (
        <TouchableOpacity onPress={run}>
            <View>
                <Text>{txt}</Text>
                <Text>{subtxt}</Text>
            </View>
            <View>
                {subtxt2&&<Text>{subtxt2}</Text>}
                {subtxt3&&<Text>{subtxt3}</Text>}
            </View>
        </TouchableOpacity>)
}
export function search(arr:any[],key:{}|String){
   return arr.filter(val=>{
            // 
        //
        //
        // 
    })
}
