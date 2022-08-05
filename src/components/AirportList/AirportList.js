import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AirportCard from "../AirportCard/AirportCard";
import { setTags } from "../../redux/slices/airportSlice";
const AirportList = () => {
  const airports = useSelector((state) => state.airport.airports);
  const tags = useSelector((state) => state.airport.tags);
  const dispatch = useDispatch();

 
  useEffect(() => {
    const arr = airports.map((item) => {
      return item.City.LanguageInfo !== ""
        ? {
            code: item.Code,
            city: Array.isArray(item.City.LanguageInfo.Language)
              ? item.City.LanguageInfo.Language[0].Name
              : item.City.LanguageInfo.Language.Name,
          }
        : {
            code: item.City.PortsInCity.Port.Code,
            city: item.LanguageInfo.Language,
          };
    });
    dispatch(setTags(arr));
  }, []);

  return (
    <View></View>
    /*  <FlatList
      numColumns={2}
      data={airports}
      initialNumToRender={7}

      renderItem={({ item, index }) => {
        return <AirportCard item={item} />;
      }}
    /> */
  );
};

export default AirportList;
