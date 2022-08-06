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
      <Text style={{fontSize:24,fontWeight:"bold",color:"#64748b",textAlign:"center"}}>No flights found for given parameters</Text>
    </View>
  );
};

export default NoFlightsFound;
