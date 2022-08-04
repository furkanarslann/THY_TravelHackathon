import { View, Text, Image, ActivityIndicator } from "react-native";
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
  const [message, setMessage] = useState();
  let weatherMessage = null;
  const getWeatherCondition = () => {
    const weatherCondition = daySpecified?.day.condition.text;

    switch (weatherCondition) {
      case "Patchy rain possible":
        weatherMessage = "Weather possibly will be raining when you land.";
        return "rainy-outline";
      case "Sunny":
        weatherMessage = "Weather possibly will be sunny when you land.";
        return "sunny";
      case "Moderate rain":
        weatherMessage = "Weather bla bla";
        return "sunny";
    }
  };
  console.log(weatherMessage);
  return (
    <View style={styles.container}>
      {daySpecified ? (
        <>
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
            {daySpecified && (
              <Ionicons
                name={getWeatherCondition()}
                size={100}
                color="#FFFFFF"
              />
            )}
          </View>
        </>
      ) : (
        <ActivityIndicator style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default WeatherCard;
