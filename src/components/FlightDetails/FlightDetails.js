import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FlightDetails = () => {
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
          <Text style={styles.code}>SAW</Text>
          <Text style={styles.city}>ISTANBUL</Text>
          <Text style={styles.time}>09:10</Text>
        </View>
        <AntDesign name="rightcircle" size={64} color="#dc2626" />
        <View style={styles.airport}>
          <MaterialIcons name="flight-land" size={48} color="#475569" />

          <Text style={styles.code}>BER</Text>
          <Text style={styles.city}>BERLIN</Text>
          <Text style={styles.time}>10:50</Text>
        </View>
      </View>
    </View>
  );
};

export default FlightDetails;
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
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
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 24,
    color: "#64748b",
  },
});
