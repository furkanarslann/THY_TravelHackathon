import { View, Text } from "react-native";
import React from "react";

const NoFlightsFound = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <Text>No flights for given parameters</Text>
    </View>
  );
};

export default NoFlightsFound;
