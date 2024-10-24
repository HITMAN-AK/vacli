import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Att from "./tabs/Att";
import Am from "./tabs/Am";
import File from "./tabs/File";
import { useRoute } from "@react-navigation/native";
const Topn = ({navigation}) => {
  const route=useRoute();
  const {item}=route.params;
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {
    const screenTitle = item.name|| "SITE";
    navigation.setOptions({ title: screenTitle });
  }, [navigation, route.params]);
  return (
    <Tab.Navigator >
      <Tab.Screen name="ATTENDANCE" component={Att}  />
      <Tab.Screen name="STOCK" component={Am} />
      <Tab.Screen name="FILE" component={File} initialParams={{item}} />
    </Tab.Navigator>
  );
};
export default Topn;
const styles = StyleSheet.create({});
