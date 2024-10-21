import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
export function list(run:any,txt:String,subtxt:String,subtxt2?:String,subtxt3?:String){
    return (
        <TouchableOpacity onPress={run}>
            <View>
                <Text>{txt}</Text>
                <Text style={lis.subTxt}>{subtxt}</Text>
            </View>
            <View>
                {subtxt2&&<Text style={lis.subtxt2}>{subtxt2}</Text>}
                {subtxt3&&<Text style={lis.subtxt3}>{subtxt3}</Text>}
            </View>
        </TouchableOpacity>)
}
const lis = StyleSheet.create({
    subTxt:{
        fontSize:8
    },
    subtxt2:{fontSize:6},
    subtxt3:{fontSize:5},
    
})
export function search(arr:any[],key:{}|String){
   return arr.filter(val=>{
            // 
        //
        //
        // 
    })
}
