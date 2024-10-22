import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
const Log = ({ navigation }) => {
  const [pk, setpk] = useState(null);
  const [em, setem] = useState("none");
  const [role, setrole] = useState(null);
  const [mess, setmess] = useState("");
  const isf = useIsFocused();
  useEffect(() => {
    if (isf) {
      setpk("");
      setem("none");
    }
  }, [isf]);
  const log = async () => {
    await axios
      .post(`${process.env.APP_HOST}log`, {
        pk: pk,
        role: role,
      })
      .then(async (res) => {
        if (res.data.status) {
          console.log(res.data);
          await AsyncStorage.setItem("role", JSON.stringify(role));
          await AsyncStorage.setItem("pk", pk);
          await AsyncStorage.setItem("acc", JSON.stringify(res.data.acc));
          navigation.navigate("tab");
        } else {
          setmess("INVALID-CREDENTIALS");
          setem("flex");
        }
      });
  };
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <Dropdown
          data={[
            { label: "OWNER", value: 0 },
            { label: "EMPLOYEE", value: 1 },
          ]}
          labelField="label"
          valueField="value"
          placeholder="SELECT-ROLE"
          value={role}
          onChange={(text) => {
            setrole(text.value);
          }}
          style={styles.drop}
        />
        <TextInput
          placeholder="enter your id"
          style={styles.in}
          placeholderTextColor={"white"}
          value={pk}
          onChangeText={(text) => {
            setpk(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.but} onPress={log}>
          <Text style={styles.bl}>Log In</Text>
        </TouchableOpacity>
        <Text style={[styles.em, { display: em }]}>{mess}</Text>
      </View>
    </View>
  );
};
export default Log;
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
    height: 30,
    backgroundColor: "black",
    color: "white",
    marginTop: 20,
    fontSize: 20,
    textAlign:"center"
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
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  drop: {
    borderWidth: 3,
    borderColor: "black",
  },
});
