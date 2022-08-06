import { View, Text, Image, StyleSheet,TextInput } from "react-native";
import React, { useState } from "react";
import { getLostBaggage } from "../redux/api/lostBaggage";
import { useDispatch } from "react-redux";

const LostBag = () => {
  const [tagNumber, setTagNumber] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.lostBagImg}
        source={require("../assets/images/search.png")}
      ></Image>
      <View>
        <Text style={styles.title}>Lost Baggage Service</Text>
      </View>
      <TextInput />
    </View>
  );
};

export default LostBag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  lostBagImg: {
    borderRadius: 15,
    width: "80%",
    height: "40%",
  },
  title: {
    fontWeight: "300",
    fontSize: 23,
  },
});
