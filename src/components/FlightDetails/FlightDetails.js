import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FlightDetails = ({ flight, departureCity, arrivalCity }) => {
  const departureHour = flight.scheduledLocalDepartureDatetime.slice(8, 10);
  const departureMinute = flight.scheduledLocalDepartureDatetime.slice(10, 12);
  const arrivalHour = flight.scheduledLocalArrivalDatetime.slice(8, 10);
  const arrivalMinute = flight.scheduledLocalArrivalDatetime.slice(10, 12);
  const date = flight.scheduledLocalDepartureDatetime;
  const year = flight.scheduledLocalDepartureDatetime.slice(0, 4) + "/";
  const month = flight.scheduledLocalDepartureDatetime.slice(4, 6) + "/";
  const day = flight.scheduledLocalDepartureDatetime.slice(6, 8);
  const hour = flight.scheduledLocalDepartureDatetime.slice(8, 10);
  const last = year + month + day;
  const newDate = new Date(last).toDateString();

  console.log(flight);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.airport}>
          <MaterialIcons name="flight-takeoff" size={48} color="#475569" />
          <Text style={styles.code}>{flight.scheduledDepartureAirport}</Text>
          <Text style={styles.city}>{departureCity}</Text>
          <Text style={styles.time}>
            {departureHour}:{departureMinute}
          </Text>
        </View>
        <AntDesign name="rightcircle" size={64} color="#475569" />
        <View style={styles.airport}>
          <MaterialIcons name="flight-land" size={48} color="#475569" />

          <Text style={styles.code}>{flight.scheduledArrivalAirport}</Text>
          <Text style={styles.city}>{arrivalCity}</Text>
          <Text style={styles.time}>
            {arrivalHour}:{arrivalMinute}
          </Text>
        </View>
      </View>
      <Text style={{ paddingBottom: 10, fontSize: 16, color: "#64748b" }}>
        {newDate}
      </Text>
    </View>
  );
};

export default FlightDetails;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  code: {
    fontSize: 32,
    color: "#64748b",
    fontWeight: "500",
  },
  city: {
    fontSize: 24,
    color: "#64748b",
    fontWeight: "200",
    textAlign: "center",
  },
  airport: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 24,
    color: "#64748b",
  },
});
