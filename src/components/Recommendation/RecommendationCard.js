import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecommendationCard = ({ recommendation }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={24} color="black" />
      <Text style={styles.text}>{recommendation.content}</Text>
    </View>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#D4EDDA",
    alignItems: "center",
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: "#134e4a",
    paddingHorizontal: 10,
  },
});
