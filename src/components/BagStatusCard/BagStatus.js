import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const BagStatus = ({ item }) => {
  const date = item.processDate;
  const hour = date.slice(10, 16);
  const fullDate = date.slice(0, 10);
 
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={{ fontSize: 24 }}>{item.bagStatus}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ paddingVertical: 10, fontSize: 16 }}>{fullDate}</Text>

        <Text style={{ fontSize: 48, fontWeight: "200" }}>{hour}</Text>
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
    backgroundColor:"#dddce0",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
