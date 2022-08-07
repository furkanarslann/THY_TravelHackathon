import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getLostBaggage } from "../redux/api/lostBaggage";
import { useDispatch } from "react-redux";
import LostBagCard from "../components/LostBagCard/LostBagCard";
import { useSelector } from "react-redux";

const LostBag = () => {
  const [text, setText] = useState("");
  const [bag, setBag] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLostBaggage());
  }, []);

  const lostBaggageFile = useSelector((state) => state.lostBag.lostBaggageFile);

  const getLostBagCard = () => {
    setBag(
      lostBaggageFile?.bagInformation.bagDetails.filter(
        (item) => item.tagNumber === text.toLocaleUpperCase()
      )[0]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.lostBagImg}
        source={require("../assets/images/search2.png")}
      ></Image>

      <Text style={styles.title}>Lost Baggage Service</Text>
      <View style={styles.search_container}>
        <Text style={styles.line1}>Tag number</Text>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Enter your Tag number"
          style={styles.input_box}
        />
      </View>
      <TouchableOpacity
        style={text !== "" ? styles.button : styles.button_disabled}
        onPress={getLostBagCard}
        disabled={text === "" ? true : false}
      >
        <Text style={styles.buttonText}>Get Baggage Info</Text>
      </TouchableOpacity>

      {bag ? (
        <LostBagCard bag={bag} />
      ) : typeof bag == "boolean" ? (
        <Text> </Text>
      ) : (
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            backgroundColor: "#FA9CA2",
            borderRadius: 15,
            padding: 15,
          }}
        >
          <Text style={{ color: "#721C23", fontWeight: "bold" }}>
            Tag number is not found.
          </Text>
          <Text style={{ color: "#721C23" }}>
            Please contact us about the issue.
          </Text>
        </View>
      )}
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
  line1: {
    fontSize: 16,
  },
  lostBagImg: {
    borderRadius: 15,
    width: "70%",
    height: "30%",
  },
  title: {
    fontWeight: "300",
    fontSize: 32,
  },
  search_container: {
    marginVertical: 15,
    width: "70%",
  },
  input_box: {
    width: "100%",
    height: 40,

    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#FF9204",
    padding: 12,
    marginTop: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  button_disabled: {
    backgroundColor: "#909090",
    padding: 12,
    marginTop: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
  },
});
