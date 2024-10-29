import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { addS, staik } from "./cmnStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { list } from "./uni";

const Op = ({navigation}) => {
  const [vis, setvis] = useState(false);
  const [name, setname] = useState("");
  const [owner, setowner] = useState("");
  const [location, setlocation] = useState("");
  const [data, setdata] = useState([]);
  const addTog = () => {
    setvis((p) => !p);
  };
  const isf = useIsFocused();
  useEffect(() => {
    const get = async () => {
      await axios
        .get(`${process.env.APP_HOST}site`, {
          headers: {
            owner: await AsyncStorage.getItem("role"),
            auth: await AsyncStorage.getItem("pk"),
          },
        })
        .then(async (r) => {
                console.log(await AsyncStorage.getItem("role"));
          setdata(r.data);
        });
    };
    (isf && !vis) && get();
  }, [isf,vis]);
  const onclick = (item) => {
    navigation.navigate("Site",{item})
  };
  async function add() {
    name || setname(null);
    owner || setowner(null);
    location || setlocation(null);
    if (!(name && owner && location)) return;
    axios
      .post(
        `${process.env.APP_HOST}site`,
        { name, owner, location },
        {
          headers: {
            auth: await AsyncStorage.getItem("pk"),
            owner: await AsyncStorage.getItem("role"),
          },
        }
      )
            .then((r) => {
                console.log(r.data);
                addTog();
                r.data == null && Alert.alert(`Error occur`,`Not Added`) 
            });
  }
  return (
    <View style={staik.root}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(i) => i._id}
          renderItem={({ item }) => {
            return (
              <View style={staik.card}>
                {list(()=>{onclick(item)}, item.name, item.owner, item.location)}
              </View>
            );
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={staik.btn} onPress={addTog}>
          <Text style={staik.btntxt}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={vis} onRequestClose={addTog} animationType="fade">
        <View style={[staik.root, { paddingTop: 40 }]}>
          <TouchableOpacity style={staik.btn} onPress={addTog}>
            <Text style={staik.btntxt}>X</Text>
          </TouchableOpacity>
          <Text>Name</Text>
          <TextInput value={name} onChangeText={setname} style={[addS.field]} />
          <Text>Owner</Text>
          <TextInput
            value={owner}
            onChangeText={setowner}
            style={[addS.field]}
          />
          <Text>location</Text>
          <TextInput
            value={location}
            onChangeText={setlocation}
            style={[addS.field]}
          />
          <TouchableOpacity style={staik.btn} onPress={add}>
            <Text style={staik.btntxt}>add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Op;

const styles = StyleSheet.create({});
