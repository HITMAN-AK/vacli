import { StyleSheet, Text, View, Modal,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const Op = () => {
    const [vis,setvis] = useState(false)
  return (
    <View>
            <TouchableOpacity onPress={()=>{setvis(p=>!p)}}>
        <Text>+dadsdsad+</Text>
      </TouchableOpacity>
        <Modal visible={vis} onRequestClose={()=>{setvis(p=>!p)}} animationType="fade" > 
                <View>
                    <Text>'sddsf'</Text>
                </View>
        </Modal>
    </View>
  )
}

export default Op

const styles = StyleSheet.create({})
