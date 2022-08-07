import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AirportCard.style";

const AirportCard = ({ item }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    item.City.LanguageInfo !== "" &&
      (Array.isArray(item.City.LanguageInfo.Language)
        ? setCity(item.City.LanguageInfo.Language[0].Name)
        : item.City.LanguageInfo != "" &&
          item.City.LanguageInfo.Language !== "" &&
          setCity(item.City.LanguageInfo.Language.Name));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
    </View>
  );
};

export default AirportCard;
