import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Home;
