import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FlightCard from "../FlightCard/FlightCard";
import { useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";

const Flights = () => {
  const flights = useSelector((state) => state.flight.flights);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View>
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
      <View>
        <SelectDropdown
        
        data={countries}
          onSelect={(selectedItem, index) => {
         
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
      <FlatList
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
