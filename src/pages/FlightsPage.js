import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAirports } from "../redux/api/airport";
import Search from "../components/Search/Search";
import { setTags } from "../redux/slices/airportSlice";
import NoFlightsFound from "../components/NoFlightsFound/NoFlightsFound";
import { FlatList } from "react-native-gesture-handler";
import FlightCard from "../components/FlightCard/FlightCard";

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
            port: item.LanguageInfo.Language,
          }
        : {
            code: item.City.PortsInCity.Port.Code,
            city: item.LanguageInfo.Language,
            port: item.LanguageInfo.Language,
          };
    });
    dispatch(setTags(arr));
  }, []);

  const listHeader = (
    <>
      <Search />
      {flights && Array.isArray(flights) && (
        <Text style={styles.text}>Available flights | {flights.length}</Text>
      )}
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
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/thy.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
      {!Array.isArray(flights) && listHeader}
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
        flights && <NoFlightsFound />
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
