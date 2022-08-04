import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightDetails from "../components/FlightDetails/FlightDetails";
import RecommendationCard from "../components/Recommendation/RecommendationCard";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { getWeather } from "../redux/api/weather";

const Details = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);

  const tags = useSelector((state) => state.airport.tags);
  const flight = useSelector((state) => state.flightDetails.details);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  console.log(flight);

  useEffect(() => {
    tags.forEach((item) => {
      if (item.code == flight.scheduledArrivalAirport) {
        setArrivalCity(item.city);
        dispatch(getWeather(item.city));
      }
      if (item.code == flight.scheduledDepartureAirport)
        setDepartureCity(item.city);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlightDetails
        departureCity={departureCity}
        arrivalCity={arrivalCity}
        flight={flight}
      />
      <WeatherCard />
      <RecommendationCard />
    </SafeAreaView>
  );
};

export default Details;
