import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./FlightCard.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { setFlightDetails } from "../../redux/slices/flightDetailsSlice";
import FlightDetails from "../FlightDetails/FlightDetails";
import { useNavigation } from "@react-navigation/native";

const FlightCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dateString = "20200515";
  const year = +item.date.substring(0, 4);
  const month = +item.date.substring(4, 6);
  const day = +item.date.substring(6, 8);
  const departureHour = item.scheduledLocalDepartureDatetime.slice(8, 10);
  const departureMinute = item.scheduledLocalDepartureDatetime.slice(10, 12);
  const arrivalHour = item.scheduledLocalArrivalDatetime.slice(8, 10);
  const arrivalMinute = item.scheduledLocalArrivalDatetime.slice(10, 12);

 
  const date = new Date(year, month - 1, day);
   /*  const date = item.estimatedLocalDepartureDatetime;
  const year = date.slice(0, 4) + "/";
  const month = date.slice(4, 6) + "/";
  const day = date.slice(6, 8);
  const hour=date.slice(8,10)
  const last = year + month + day;
  */

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setFlightDetails(item));
        navigation.navigate("Flight Details");
      }}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/thy.png")}
        style={styles.logo}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.airports}>{item.actualDepartureAirport} </Text>
        <Text style={styles.airports}>
          {departureHour}:{departureMinute}
        </Text>
      </View>

      <Ionicons name="arrow-forward" size={21} color="#EA2E12E1" />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.airports}>{item.actualArrivalAirport} </Text>
        <Text style={styles.airports}>
          {arrivalHour}:{arrivalMinute}
        </Text>
      </View>
      <Text style={styles.date}>{date.toDateString()}</Text>
    </TouchableOpacity>
  );
};

export default FlightCard;
