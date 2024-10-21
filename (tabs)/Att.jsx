import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import { list } from "./uni";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
const Att = () => {
  const [vis, setvis] = useState(false);
  const [name, setnam] = useState("");
  const [role, setrol] = useState("");
  const [salary, setsal] = useState("");
  const [phone, setphone] = useState("");
  const [email, setmail] = useState("");
  const [data, setdata] = useState([]);
  const isf = useIsFocused();
  useEffect(() => {
    setmail("");
    setphone("");
    setrol("");
    setsal("");
    setnam("");
  }, [vis]);
  useEffect(() => {
    const get = async () => {
      axios
        .get(`${process.env.APP_HOST}e`, {
          headers: {
            auth: await AsyncStorage.getItem("pk"),
            owner: await AsyncStorage.getItem("role"),
          },
        })
        .then((r) => {
          setdata(r.data);
        });
    };
    (isf) && get()
  }, [isf]);
  const addTog = () => {
    setvis((p) => !p);
  };
  const add = async () => {
    name || setnam(null);
    role || setrol(null);
    salary || setsal(null);
    phone || setphone(null);
    email || setmail(null);
    if (!(name || role || salary || phone || email)) return;
    axios
      .post(
        `${process.env.APP_HOST}ae`,
        { name, role, salary, phone, email },
        {
          headers: {
            auth: await AsyncStorage.getItem("pk"),
            owner: await AsyncStorage.getItem("role"),
          },
        }
      )
      .then((r) => {
        if (r.status) {
          addTog();
        }
      });
  };
  const onclick = () => {
    // on click for on Attendance action
  };
  return (
    <View>
      <Text style={styles.filTit}>Fillters</Text>
      <View style={styles.filter}>
        <View style={styles.filFel}>
          <Text>project</Text>
          <Dropdown
            data={[
              { label: "Item 1", value: "1" },
              { label: "Item 2", value: "2" },
              { label: "Item 3", value: "3" },
              { label: "Item 4", value: "4" },
            ]}
            labelField="label"
            valueField="value"
            search
            searchPlaceholder="Search..."
            onChange={() => {}}
            style={styles.drop}
          />
        </View>
        <View style={styles.filFel}>
          <Text>project</Text>
          <Dropdown
            data={[
              { label: "Item 1", value: "1" },
              { label: "Item 2", value: "2" },
              { label: "Item 3", value: "3" },
              { label: "Item 4", value: "4" },
            ]}
            labelField="label"
            valueField="value"
            search
            searchPlaceholder="Search..."
            onChange={() => {}}
            style={styles.drop}
          />
        </View>
        <View style={styles.filFel}>
          <Text>project</Text>
          <Dropdown
            data={[
              { label: "Item 1", value: "1" },
              { label: "Item 2", value: "2" },
              { label: "Item 3", value: "3" },
              { label: "Item 4", value: "4" },
            ]}
            labelField="label"
            valueField="value"
            search
            searchPlaceholder="Search..."
            onChange={() => {}}
            style={styles.drop}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>download</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={addTog}>
          <Text style={styles.btntxt}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({ itm }) => {
          list(onclick, itm);
        }}
      />

      <Modal visible={vis} onRequestClose={addTog} animationType="fade">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[{ flex: 1 }, styles.fildAdd]}>
            <View>
              <TouchableOpacity onPress={addTog} style={styles.btn}>
                <Text style={styles.btntxt}>X</Text>
              </TouchableOpacity>
            </View>
            <Text>Name</Text>
            <TextInput
              value={name}
              onChangeText={setnam}
              style={[styles.field, name ?? styles.fiiMis]}
            />
            <Text>roll</Text>
            <Dropdown
              data={[
                { cat: "labour" },
                { cat: "engineer" },
                { cat: "mason" },
                { cat: "electrican" },
                { cat: "plumber" },
              ]}
              labelField="cat"
              valueField="cat"
              value={role}
              onChange={(v) => {
                setrol(v.cat);
              }}
              style={[styles.field, role ?? styles.fiiMis]}
            />
            <Text>salary</Text>
            <TextInput
              value={salary}
              onChangeText={setsal}
              style={[styles.field, salary ?? styles.fiiMis]}
            />
            <Text>phone</Text>
            <TextInput
              value={phone}
              onChangeText={setphone}
              style={[styles.field, phone ?? styles.fiiMis]}
            />
            <Text>mail</Text>
            <TextInput
              value={email}
              onChangeText={setmail}
              style={[styles.field, email ?? styles.fiiMis]}
            />
            <View>
              <TouchableOpacity style={styles.btn} onPress={add}>
                <Text style={styles.btntxt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Att;

const styles = StyleSheet.create({
  filter: {
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  filTit: {
    fontSize: 30,
  },
  drop: {
    borderWidth: 3,
    borderColor: "black",
    margin: 4,
  },
  filFel: {
    width: "30%",
    borderColor: "black",
    borderWidth: 2,
    margin: 4,
    padding: 2,
  },
  btntxt: {
    fontSize: 20,
  },
  field: {
    borderWidth: 2,
    borderColor: "black",
  },
  fildAdd: {
    padding: 5,
  },
  btn: {
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 50,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fiiMis: {
    borderWidth: 2,
    borderColor: "red",
  },
});
