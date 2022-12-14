import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FlightCard from "../FlightCard/FlightCard";
import { useSelector } from "react-redux";
import Search from "../Search/Search";

const Flights = () => {
  const flights = useSelector((state) => state.flight.flights);
 
  return (
    <View style={{backgroundColor:"#ffffff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: "#b91c1c",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
          Uçuş Bul
        </Text>
      </View>
      <Search/>
      
      <FlatList
      style={{backgroundColor:"red"}}
        numColumns={2}
        data={flights}
        renderItem={({ item, index }) => {
          return <FlightCard item={item} />;
        }}
      />
    </View>
  );
};

export default Flights;
