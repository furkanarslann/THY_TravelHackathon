import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/api/weather";
import styles from "./WeatherCard.style";
import { Ionicons } from "@expo/vector-icons";

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

  const [weatherMessage, setWeatherMessage] = useState(null);
  const getWeatherCondition = () => {
    const weatherCondition = daySpecified?.day.condition.text;
    
    switch (weatherCondition) {
      case "Patchy rain possible":
        setWeatherMessage("Weather possibly will be raining when you land.");
        return "rainy-outline";
      case "Sunny":
        setWeatherMessage("Weather possibly will be sunny when you land.");
        return "sunny";
      case "Moderate rain":
        setWeatherMessage("Weather bla bla");
        return "sunny";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.left_top}>
          <Text style={styles.city}>{weather?.location.name}</Text>
          <Text style={styles.date}>
            {new Date(daySpecified?.date).toDateString()}
          </Text>
        </View>
        <View style={styles.left_bottom}>
          <Text style={styles.degree}>{daySpecified?.day.avgtemp_c}°C</Text>
        </View>
      </View>

      <View style={styles.right}>
       { daySpecified && <Ionicons name={getWeatherCondition} size={100} color="#FFFFFF" />}
      </View>
    </View>
  );
};

export default WeatherCard;
