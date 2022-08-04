import { View, Text, Image } from "react-native";
import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <View>
      <Text>WeatherCard</Text>
      <Image style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default WeatherCard;
