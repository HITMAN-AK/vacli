import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import Tn from "../Tn";
const Pr = ({ navigation }) => {
  const [l, setl] = useState(true);
  const [per, setper] = useState();
  useEffect(() => {
    const pr = async () => {
      try {
        const pk = await AsyncStorage.getItem("pk");
        const role = await AsyncStorage.getItem("role");
        const response = await axios.post(`${process.env.APP_HOST}pr`, {
          pk: pk,
          role: role,
        });
        if (response.data.per) {
          setper(true);
        } else {
          setper(false);
          navigation.replace("VELX");
        }
      } catch (error) {
        console.error("Error checking permissions", error);
        setper(false);
        navigation.replace("VELX");
      } finally {
        setl(false);
      }
    };

    pr();
  }, [navigation]);
  if (l) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  if (per) {
    return <Tn />;
  }
  return null;
};
export default Pr;
