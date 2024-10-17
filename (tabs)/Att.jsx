import { StyleSheet, Text, View, TextInput, Modal,TouchableOpacity,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import {Dropdown} from "react-native-element-dropdown"
const Att = () => {
  const [vis,setvis] = useState(false)
    const addTog = ()=>{setvis(p=>!p)}
    const onclick = ()=>{
        // on click for on Attendance action
    } 
    return (
        <View>
                    <Text style={styles.filTit}>Fillters</Text>
            <View style={styles.filter}>
                  <View style={styles.filFel}>
                   <Text>project</Text>
                    <Dropdown data={[{ label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' }]} labelField="label"
          valueField="value" search searchPlaceholder="Search..." onChange={()=>{}} style={styles.drop} />
                </View>
<View style={styles.filFel}>
                   <Text>project</Text>
                    <Dropdown data={[{ label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' }]} labelField="label"
          valueField="value" search searchPlaceholder="Search..." onChange={()=>{}} style={styles.drop} />
                </View>
<View style={styles.filFel}>
                   <Text>project</Text>
                    <Dropdown data={[{ label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' }]} labelField="label"
          valueField="value" search searchPlaceholder="Search..." onChange={()=>{}} style={styles.drop} />
                </View>
                <View>
                    <TouchableOpacity>
                    <Text>download</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={addTog}>
                <Text>+</Text>
            </TouchableOpacity>
            <Modal visible={vis} onRequestClose={addTog} animationType="fade" > 
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={addTog}>
                        <Text>X</Text>
                    </TouchableOpacity>

                    <Text>Name</Text>
                    <TextInput/>
                    <Text>cat</Text>
                    <Dropdown data={[{cat:"as"}]} labelField="cat" valueField="cat" onChange={()=>{}}/> 
                    <Text>salary</Text>
                    <TextInput/>
                    <TouchableOpacity>
                        <Text>add</Text>
                    </TouchableOpacity>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )

}

export default Att

const styles = StyleSheet.create({
    filter:{
        borderWidth:2,
        borderColor:"black",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap:"wrap",
        alignItems:"center",
        
    },
    filTit:{
        fontSize:30,

    },drop:{
        borderWidth:3,
        borderColor:"black",
        margin:4,
    },filFel:{
        width:"30%",
        borderColor:"black",
        borderWidth:2,
        margin:4,
        padding:2,

        
    }

})
