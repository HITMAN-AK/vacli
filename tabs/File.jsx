import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const File = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View>
      <Text>{item?.name}</Text>
    </View>
  );
};

export default File;

const styles = StyleSheet.create({});
