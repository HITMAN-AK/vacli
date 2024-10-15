import { StyleSheet, Text, View, TextInput, Modal,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const Cp = () => {
  const [vis,setvis] = useState(false)
    const addTog = ()=>{setvis(p=>!p)}
    const onclick = ()=>{
        // on click for on completed projects action
    } 
    return (
        <View>
            <TouchableOpacity onPress={addTog}>
                <Text>+dfrfref+</Text>
            </TouchableOpacity>
            <Modal visible={vis} onRequestClose={addTog} animationType="fade" > 
                <View>
                    <TouchableOpacity onPress={addTog}>
                        <Text>X</Text>
                    </TouchableOpacity>

                    <Text>Name</Text>
                    <TextInput/>
                    <Text>location</Text>
                    <TextInput/>
                    <Text>any</Text>
                    <TextInput/>
                    <TouchableOpacity>
                        <Text>add</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )

}

export default Cp

const styles = StyleSheet.create({})
