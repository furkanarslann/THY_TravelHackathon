import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flights from "../components/Flights/Flights";
import AirportList from "../components/AirportList/AirportList";
import { getAirports } from "../redux/api/airport";
import Search from "../components/Search/Search";
import Calender from "../components/DatePicker/Calendar";
import { setTags } from "../redux/slices/airportSlice";
import FlightsList from "../components/FlightsList/FlightsList";
import NoFlightsFound from "../components/NoFlightsFound/NoFlightsFound";
import { MaterialIcons } from "@expo/vector-icons";

const FlightsPage = () => {
  const dispatch = useDispatch();

  const flights = useSelector((state) => state.flight.flights);

  const airports = useSelector((state) => state.airport.airports);

  useEffect(() => {
    dispatch(getAirports());

    const arr = airports.map((item) => {
      return item.City.LanguageInfo !== ""
        ? {
            code: item.Code,
            city: Array.isArray(item.City.LanguageInfo.Language)
              ? item.City.LanguageInfo.Language[0].Name
              : Array.isArray(item.City.LanguageInfo.Language.Name)
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
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 2 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: "#D52A10",
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          <MaterialIcons name="flight" size={30} color="white" />
        </Text>
      </View>
      <Search />
      {Array.isArray(flights) ? (
        <FlightsList flights={flights} />
      ) : (
        <NoFlightsFound />
      )}
    </SafeAreaView>
  );
};

export default FlightsPage;
