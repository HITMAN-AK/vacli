import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
export function list(run:any,txt:String,subtxt:String,subtxt2?:String,subtxt3?:String){
    return (
        <TouchableOpacity style={lis.root} onPress={run}>
            <View style={lis.main}>
                <Text style={lis.txt}>{txt}</Text>
                <Text style={lis.subTxt}>{subtxt}</Text>
            </View>
            <View style={lis.sub}>
                {subtxt2&&<Text style={lis.subtxt2}>{subtxt2}</Text>}
                {subtxt3&&<Text style={lis.subtxt3}>{subtxt3}</Text>}
            </View>
        </TouchableOpacity>)
}
const lis = StyleSheet.create({
    txt:{fontSize:20},
    subTxt:{
        fontSize:15
    },
    subtxt2:{fontSize:12},
    subtxt3:{fontSize:10},
    root:{
        borderColor:'black',
        flex:1,
        flexDirection:'row',
        marginVertical:3,
        padding:5,
    },
    main:{
        flex:0.7
    },
    sub:{ flex:0.3}
    
})
export function search(arr:any[],key:{}|String){
   return arr.filter(val=>{
            // 
        //
        //
        // 
    })
}
