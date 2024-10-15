import {View,Text,TouchableOpacity,} from "react-native"
import React from "react"
export default ()=>{
    const list = (maintxt:String,subtxt:String,subtxt2?:String ,subtxt3?:String) => {
        return(<TouchableOpacity>
            <Text>{maintxt}</Text>
            <Text>{subtxt}</Text>
            {subtxt2 && <Text>{subtxt2}</Text>}
            {subtxt3 && <Text>{subtxt3}</Text>}
        </TouchableOpacity>)

    }
    return (
        <View>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
            {list("dlasjc","sdf")}
        </View>
    )
}
