import { View, Text } from "react-native";
import React from "react";

const FlightsList = ({ flights }) => {
  const newdate = new Date();
  newdate.setUTCDate("202208050755");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available flights | {flights.length}</Text>
    
    </View>
  );
};

export default FlightsList;

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 21,
    padding: 10,
    fontWeight: "600",
    color: "#64748b",
  },
});
