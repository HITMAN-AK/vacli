import { StyleSheet, Text, View, TextInput, Modal,TouchableOpacity, FlatList,} from 'react-native'
import React,{useState,useEffect} from 'react'
import { addS, staik } from './cmnStyle'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Op = () => {
    const [vis,setvis] = useState(false)
    const [name,setname] = useState('')
    const [owner,setowner] = useState('')
    const [location,setlocation] = useState('')
    const [data,setdata] = useState([])
    const addTog = ()=>{setvis(p=>!p)}
    useEffect(()=>{},[])
    const onclick = ()=>{
        // on click for on going projects action
    } 
    async function add(){
        name || setname(null)
        owner || setowner(null)
        location || setlocation(null)
        if(!(name && owner && location )) return;
        axios.post(`${process.env.APP_HOST}site`,{name,owner,location},{headers:{
            auth: await AsyncStorage.getItem('pk'),
            owner:"supervisor"
            // owner: await AsyncStorage.getItem('role')
        }}).then((r)=>{
                console.log(r.data);
                addTog()
            })
    }
    return (
        <View style={staik.root}>
            <View>
                <FlatList data={data} keyExtractor={(i) => i._id} renderItem={()=>{}}/>
            </View>
            <View>
                <TouchableOpacity style={staik.btn} onPress={addTog}>
                    <Text style={staik.btntxt}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={vis}  onRequestClose={addTog} animationType="fade" > 
                <View style={staik.root}>
                    <TouchableOpacity style={staik.btn} onPress={addTog}>
                        <Text style={staik.btntxt} >X</Text>
                    </TouchableOpacity>

                    <Text>Name</Text>
                    <TextInput value={name} onChangeText={setname} style={[addS.field,]}/>
                    <Text>Owner</Text>
                    <TextInput value={owner} onChangeText={setowner} style={[addS.field,]}/>
                    <Text>location</Text>
                    <TextInput value={location} onChangeText={setlocation} style={[addS.field,]} />
                    <TouchableOpacity style={staik.btn} onPress={add}>
                        <Text style={staik.btntxt}>add</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Op

const styles = StyleSheet.create({})
