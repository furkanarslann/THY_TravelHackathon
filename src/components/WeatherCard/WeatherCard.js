import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/api/weather";
import styles from "./WeatherCard.style";
import { Ionicons } from "@expo/vector-icons";
import RecommendationCard from "../Recommendation/RecommendationCard";
import data from "../../assets/json/recommendation.json";
import TitleCard from "../TitleCard/TitleCard";

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.weather);
  const flight = useSelector((state) => state.flightDetails.details);

  const year = flight.date.slice(0, 4) + "-";
  const month = flight.date.slice(4, 6) + "-";
  const day = flight.date.slice(6, 8);
  const [recommendations, setRecommendations] = useState();
  const flightDate = year + month + day;
  const days = weather?.forecast.forecastday;
  /*   const [header, setHeader] = useState(""); */

  const daySpecified = days?.filter((item) => item.date == flightDate)[0];
  let weatherMessage = null;
  console.log(recommendations);
  console.log(daySpecified);

  useEffect(() => {
    setRecommendations(
      data.filter((item) => item.key == daySpecified?.day.condition.text)[0]
        ?.recommendations
    );
  }, [weather]);

  const title = data.filter(
    (item) => item.key == daySpecified?.day.condition.text
  )[0]?.title;

  /* useEffect(() => {
    setHeader(
      data.filter((item) => item.key == daySpecified?.day.condition.text)[0]
        ?.recommendations[0].content
    );
  }, [header]); */

  console.log(recommendations);
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
        return "rainy-outline";
      case "Light rain shower":
        weatherMessage = "Weather bla bla";
        return "rainy-outline";
      case "Partly cloudy":
        weatherMessage = "Weather bla bla";
        return "cloudy-outline";
      case "Cloudy":
        weatherMessage = "Weather bla bla";
        return "cloudy-outline";
      case "Clear":
        weatherMessage = "Weather bla bla";
        return "sunny";
      case "Overcast":
        weatherMessage = "Weather bla bla";
        return "cloudy-outline";
      case "Light Drizzle":
        weatherMessage = "Weather bla bla";
        return "rainy-outline";
    }
  };
  return (
    <>
      <View style={styles.container}>
        {daySpecified ? (
          <>
            <View style={styles.left}>
              <View style={styles.left_top}>
                <Text style={styles.city}>{weather.location.name}</Text>
                <Text style={styles.date}>
                  {new Date(daySpecified.date).toDateString()}
                </Text>
              </View>
              <View style={styles.left_bottom}>
                <Text style={styles.degree}>
                  {daySpecified.day.avgtemp_c}°C
                </Text>
              </View>
            </View>

            <View style={styles.right}>
              {daySpecified && (
                <Ionicons
                  name={getWeatherCondition()}
                  size={100}
                  color="#cbd5e1"
                />
              )}
            </View>
          </>
        ) : (
          <ActivityIndicator style={{ width: 200, height: 200 }} />
        )}
      </View>
      {weather && (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingVertical: 10,
              textAlign: "center",
              color: "#134e4a",
            }}
          >
            Travel Recommendations
          </Text>
          {weather && recommendations && title && <TitleCard title={title} />}
          {weather &&
            recommendations &&
            recommendations.map((item) => (
              <RecommendationCard recommendation={item} />
            ))}
        </View>
      )}
    </>
  );
};

export default WeatherCard;
