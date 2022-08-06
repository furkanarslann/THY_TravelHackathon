import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
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
import { FlatList } from "react-native-gesture-handler";
import FlightCard from "../components/FlightCard/FlightCard";

const FlightsPage = () => {
  const dispatch = useDispatch();

  const flights = useSelector((state) => state.flight.flights);

  const airports = useSelector((state) => state.airport.airports);

  useEffect(() => {
    dispatch(getAirports());
    airports.map((item) => {
      console.log(item.LanguageInfo.Language);
    });
    const arr = airports.map((item) => {
      return item.City.LanguageInfo !== ""
        ? {
            code: item.Code,
            city: Array.isArray(item.City.LanguageInfo.Language)
              ? item.City.LanguageInfo.Language[0].Name
              : Array.isArray(item.City.LanguageInfo.Language.Name)
              ? item.City.LanguageInfo.Language[0].Name
              : item.City.LanguageInfo.Language.Name,
            port: item.LanguageInfo.Language,
          }
        : {
            code: item.City.PortsInCity.Port.Code,
            city: item.LanguageInfo.Language,
            port: item.LanguageInfo.Language,
          };
    });
    dispatch(setTags(arr));
    console.log(arr);
  }, []);

  const listHeader = (
    <>
      <Search />
      <Text style={styles.text}>Available flights | {flights.length}</Text>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      {Array.isArray(flights) ? (
        <FlatList
          ListHeaderComponent={listHeader}
          scrollEnabled={true}
          data={flights}
          initialNumToRender={1}
          renderItem={({ item }) => {
            return <FlightCard item={item} />;
          }}
        />
      ) : (
        <NoFlightsFound />
      )}
    </SafeAreaView>
  );
};

export default FlightsPage;

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
