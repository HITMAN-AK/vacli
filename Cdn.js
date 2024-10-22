import { StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
const Cdn = (props) => {
  const [n, sn] = useState();
  const [r, sr] = useState();
  const [k, sk] = useState();
  useEffect(() => {
    const gp = async () => {
      const pk = await AsyncStorage.getItem("pk");
      await axios
        .post(`${process.env.APP_HOST}pi`, {
          pk: pk,
          role: await AsyncStorage.getItem("role"),
        })
        .then((res) => {
          sn(res.data.name);
          sr(res.data.role);
          sk(pk);
        });
    };
    gp();
  }, []);
  const navigation = useNavigation();
  const rem = async () => {
    const role = await AsyncStorage.getItem("role");
    if (role !== null) {
      await AsyncStorage.removeItem("role");
    }

    const pk = await AsyncStorage.getItem("pk");
    if (pk !== null) {
      await AsyncStorage.removeItem("pk");
    }

    const acc = await AsyncStorage.getItem("acc");
    if (acc !== null) {
      await AsyncStorage.removeItem("acc");
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "VELX" }], 
    });
  };
  return (
    <View style={styles.main}>
      <View style={styles.pi}>
        <MaterialIcons name="account-circle" size={80} />
        <Text style={styles.pt}>{n}-{r}</Text>
        <Text style={styles.pk}>ID - {k}</Text>
      </View>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.b} onPress={rem}>
        <Text style={styles.bt}>LOG-OUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cdn;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  b: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 30,
    width: "100%",
    borderRadius: 20,
    marginBottom: "20%",
    borderWidth: 2,
    borderColor: "red",
  },
  bt: {
    fontWeight: "bold",
    color: "white",
  },
  pi: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    width: "100%",
  },
  pt: {
    letterSpacing: 2,
    fontWeight:"bold"
  },
  pk:{
    color:"red"
  }
});
