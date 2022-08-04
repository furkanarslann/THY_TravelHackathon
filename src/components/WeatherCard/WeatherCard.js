import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
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
        <Ionicons name="partly-sunny-outline" size={100} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default WeatherCard;
