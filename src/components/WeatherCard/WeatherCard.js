import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

  const daySpecified = days?.filter((item) => item.date == flightDate)[0];

  useEffect(() => {
    setRecommendations(
      data.filter((item) => item.key == daySpecified?.day.condition.text)[0]
        ?.recommendations
    );
  }, [weather]);

  const title = data.filter(
    (item) => item.key == daySpecified?.day.condition.text
  )[0]?.title;

  const getWeatherCondition = () => {
    const weatherCondition = daySpecified?.day.condition.text;
    switch (weatherCondition) {
      case "Patchy rain possible":
        return "rainy-outline";
      case "Sunny":
        return "sunny";
      case "Moderate rain":
        return "rainy-outline";
      case "Light rain shower":
        return "rainy-outline";
      case "Partly cloudy":
        return "cloudy-outline";
      case "Cloudy":
        return "cloudy-outline";
      case "Clear":
        return "sunny";
      case "Overcast":
        return "cloudy-outline";
      case "Light Drizzle":
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
          <ActivityIndicator size={32} style={{ alignSelf: "center" }} />
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
          {weather && recommendations ? (
            recommendations.map((item, index) => (
              <RecommendationCard recommendation={item} key={index} />
            ))
          ) : (
            <ActivityIndicator size={32} />
          )}
        </View>
      )}
    </>
  );
};

export default WeatherCard;
