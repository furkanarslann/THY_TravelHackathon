import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/api/weather";

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.weather);
  const flight = useSelector((state) => state.flightDetails.details);
  console.log(flight);

  const year = flight.date.slice(0, 4) + "-";
  const month = flight.date.slice(4, 6) + "-";
  const day = flight.date.slice(6, 8);

  const flightDate = year + month + day;
  const days = weather?.forecast.forecastday;
  console.log(days);

  const daySpecified = days?.filter((item) => item.date == flightDate)[0];
  console.log(daySpecified);
  console.log(weather);

  return (
    <View>
      <Text></Text>
      <View>
        <Text>{weather?.location.name}</Text>
        <Text>{daySpecified?.day.avgtemp_c} C</Text>
        <Text>{daySpecified?.day.condition.text}</Text>
        <Text>{new Date(daySpecified?.date).toDateString()}</Text>
      </View>

      <Image style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default WeatherCard;
