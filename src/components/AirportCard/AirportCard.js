import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AirportCard.style";
const AirportCard = ({ item }) => {
  let ct = 0;
  const [city, setCity] = useState("");

  //longer
  useEffect(() => {
    console.log(item.LanguageInfo.Language);
    Array.isArray(item.City.PortsInCity.Port)
      ? setCity(item.City.PortsInCity.Port[0].Code)
      : setCity(item.City.PortsInCity.Port.Code);
    /*       Array.isArray(item.City.LanguageInfo.Language)?setCity(item.City.LanguageInfo.Language[0].Name): item.City.LanguageInfo.Language?setCity(item.City.LanguageInfo.Language.Name):setCity("error")
     */
  }, []);

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
    </View>
  );
};

export default AirportCard;
