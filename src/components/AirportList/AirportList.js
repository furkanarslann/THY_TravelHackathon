import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AirportCard from "../AirportCard/AirportCard";
import { setTags } from "../../redux/slices/airportSlice";
const AirportList = () => {
  const airports = useSelector((state) => state.airport.airports);
  const tags = useSelector((state) => state.airport.tags);
  const dispatch=useDispatch();

  /* useEffect(() => {
  airports.forEach((item)=>{
    console.log(item.City.LanguageInfo.Language[0].Name);
  })
}, []) */
  useEffect(() => {
    const arr = airports.map((item) => {
      return Array.isArray(item.City.PortsInCity.Port)
        ? item.City.PortsInCity.Port[0].Code
        : item.City.PortsInCity.Port.Code;
    });
    dispatch(setTags(arr.sort()));

    
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={airports}
      renderItem={({ item, index }) => {
        return <AirportCard item={item} />;
      }}
    />
  );
};

export default AirportList;
