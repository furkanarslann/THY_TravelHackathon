import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import FlightCard from "../FlightCard/FlightCard";
import { FlatList } from "react-native-gesture-handler";

const FlightsList = ({ flights }) => {
  const newdate = new Date();
  newdate.setUTCDate("202208050755");
  console.log(newdate);
  console.log(flights);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available flights | {flights.length}</Text>
      <FlatList
        scrollEnabled={true}
        data={flights}
        initialNumToRender={1}
        renderItem={({ item }) => {
          return <FlightCard item={item} />;
        }}
      />
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
