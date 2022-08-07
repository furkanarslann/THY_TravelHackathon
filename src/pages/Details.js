import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightDetails from "../components/FlightDetails/FlightDetails";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { getWeather } from "../redux/api/weather";
import { ScrollView } from "react-native-gesture-handler";

const Details = () => {
  const dispatch = useDispatch();


  const tags = useSelector((state) => state.airport.tags);
  const flight = useSelector((state) => state.flightDetails.details);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");

  useEffect(() => {
    tags.forEach((item) => {
      if (item.code == flight.scheduledArrivalAirport) {
        setArrivalCity(item.city);
        dispatch(getWeather(item.city));
      }
      if (item.code == flight.scheduledDepartureAirport)
        setDepartureCity(item.city);
    });
  }, [flight]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{flex:1}}>
        <FlightDetails
          departureCity={departureCity}
          arrivalCity={arrivalCity}
          flight={flight}
        />
        <WeatherCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
