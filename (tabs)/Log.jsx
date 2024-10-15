import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
const Log = ({navigation}) => {
  const [uname,setuname]=useState(null);
  const [pass,setpass]=useState(null);
  const [em, setem] = useState("none");
  const [mess, setmess] = useState("");
  useEffect(()=>{
    setuname("");
    setpass("");
    setem("none");
  },[navigation])
  const log=async()=>{
    await axios.post(`${process.env.APP_HOST}/log`,{
      
    })
  }
  return (
    <View style={styles.main} >
      <View style={styles.body}>
        <TextInput
          placeholder="User Name"
          style={styles.in}
          placeholderTextColor={"white"}
          value={uname}
          onChangeText={(text) => {
            setuname(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.in}
          placeholderTextColor={"white"}
          value={pass}
          onChangeText={(text) => {
            setpass(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.but} onPress={log}>
          <Text style={styles.bl}>Log In</Text>
        </TouchableOpacity>
        <Text style={[styles.em,{display:em}]}>{mess}</Text>
      </View>
    </View>
  )
}
export default Log
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "rgba(128,128,128, 0.6)",
    borderRadius: 20,
    width: 300,
    height: 190,
    padding: 15,
    marginTop: -40,
  },
  in: {
    height:30,
    backgroundColor: "black",
    color: "white",
    marginTop: 10,
    fontSize: 20,
  },
  but: {
    marginLeft: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 30,
    width: 80,
    borderRadius: 20,
    marginTop: 18,
    borderWidth: 2,
    borderColor: "red",
  },
  bl: {
    fontWeight: "bold",
    color: "white",
  },
  em: {
    marginTop:10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
})