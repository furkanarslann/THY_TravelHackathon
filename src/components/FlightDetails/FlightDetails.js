import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const FlightDetails = () => {
  const flight = useSelector((state) => state.flightDetails.details);
  console.log(flight);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FlightDetails</Text>
    </View>
  );
};

export default FlightDetails;
