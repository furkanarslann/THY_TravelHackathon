import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const BagStatus = ({ item }) => {
  const date = item.processDate;
  const hour = date.slice(10, 16);
  const fullDate = date.slice(0, 10);
  console.log(fullDate);
  console.log(hour);
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={{ fontSize: 32 }}>Last Process</Text>
        <Text>{fullDate}</Text>
      </View>
      <View>
        <Text>dsasd</Text>
        <Text>{item.bagStatus}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BagStatus;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginBottom: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
