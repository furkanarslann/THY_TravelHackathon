import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AirportCard.style";
import { useSelector } from "react-redux";
const AirportCard = ({ item }) => {
  let ct = 0;
  const [city, setCity] = useState("");

  const airports = useSelector((state) => state.airport.airports);
  //longer
  useEffect(() => {
    //  item.City.LanguageInfo && console.log(item.City.LanguageInfo);
    /*     console.log(item.LanguageInfo.Language);

 */ item.City.LanguageInfo !== "" &&
      (Array.isArray(item.City.LanguageInfo.Language)
        ? setCity(item.City.LanguageInfo.Language[0].Name)
        : item.City.LanguageInfo != "" &&
          item.City.LanguageInfo.Language !== "" &&
          setCity(item.City.LanguageInfo.Language.Name));
    //  Array.isArray(item.City.LanguageInfo.Language)?setCity(item.City.LanguageInfo.Language[0].Name): item.City.LanguageInfo.Language?setCity(item.City.LanguageInfo.Language.Name):setCity("error")
  }, []);

  return (
    <View style={styles.container}>
      <Text>{city}</Text>
    </View>
  );
};

export default AirportCard;
