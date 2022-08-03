import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./FlightCard.style";
import Ionicons from "@expo/vector-icons/Ionicons";
const FlightCard = ({ item }) => {
  const dateString = "20200515";
  const year = +item.date.substring(0, 4);
  const month = +item.date.substring(4, 6);
  const day = +item.date.substring(6, 8);

  const date = new Date(year, month - 1, day);
  console.log(date);
  /*  const date = item.estimatedLocalDepartureDatetime;
  const year = date.slice(0, 4) + "/";
  const month = date.slice(4, 6) + "/";
  const day = date.slice(6, 8);
  const hour=date.slice(8,10)
  const last = year + month + day;
  */

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/thy.png")}
        style={styles.logo}
      />
      <Text style={styles.airports}>
        {item.actualDepartureAirport}{" "}
        <Ionicons
          name="arrow-forward"
          size={21}
          color="#EA2E12E1"
        />{" "}
        {item.actualArrivalAirport}
      </Text>

      <Text style={styles.date}>{date.toDateString()}</Text>
    </View>
  );
};

export default FlightCard;
