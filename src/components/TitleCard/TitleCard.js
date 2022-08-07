import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./TitleCard.style";

const TitleCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={24} color="white" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TitleCard;
