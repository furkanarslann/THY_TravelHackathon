import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalPicker from "./ModalPicker/ModalPicker";
import ToModalPicker from "./ModalPicker/ToModalPicker";

const Search = () => {
  const [where, setWhere] = useState("SELECT");
  const [to, setTo] = useState("SELECT");
  const [toCity, setToCity] = useState("SELECT");
  const [city, setCity] = useState("SELECT");

  const [isVisible, setIsVisible] = useState(false);
  const [toIsVisible, setToIsVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsVisible(bool);
  };
  const changeModalVisibilityTo = (bool) => {
    setToIsVisible(bool);
  };
  console.log(where);
  return (
    <SafeAreaView>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setWhere={setWhere}
          setCity={setCity}
        />
      </Modal>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            position: "absolute",
            left: 4,
            top: 4,
            fontSize: 20,
            fontWeight: "600",
            color: "#64748b",
          }}
        >
          FROM
        </Text>

        <Text
          style={{
            position: "absolute",
            left: 4,
            bottom: 4,
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          {city}
        </Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => changeModalVisibility(true)}
        >
          <Text style={styles.text}>{where}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            { borderLeftWidth: 2, borderColor: "#cbd5e1" },
          ]}
          onPress={() => {
            changeModalVisibilityTo(true);
            console.log("to");
          }}
        >
          <Text style={styles.text}>{to}</Text>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            right: 4,
            top: 4,
            fontSize: 20,
            fontWeight: "600",
            color: "#64748b",
          }}
        >
          TO
        </Text>

        <Text
          style={{
            position: "absolute",
            width: "50%",
            textAlign: "right",
            right: 6,
            bottom: 6,
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          {toCity}
        </Text>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={toIsVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ToModalPicker
          changeModalVisibilityTo={changeModalVisibilityTo}
          setTo={setTo}
          setToCity={setToCity}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  touchableOpacity: {
    width: "100%",

    backgroundColor: "white",

    paddingHorizontal: 20,
  },
  text: { marginVertical: 20, fontSize: 24, fontWeight: "bold" },
});
