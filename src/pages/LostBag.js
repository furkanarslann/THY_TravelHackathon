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

  console.log("====================================");
  console.log(bag);
  console.log("====================================");

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
        source={require("../assets/images/search.png")}
      ></Image>

      <Text style={styles.title}>Lost Baggage Service</Text>
      <View style={styles.search_container}>
        <Text style={styles.line1}>Tag number</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter your Tag number"
          style={styles.input_box}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={getLostBagCard}>
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
            marginVertical: 25,
            backgroundColor: "#EC0A0A9F",
            borderRadius: 15,
            padding: 15,
          }}
        >
          <Text style={{ color: "white" }}>Tag number is not found.</Text>
          <Text style={{ color: "white" }}>
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
  lostBagImg: {
    borderRadius: 15,
    width: "80%",
    height: "40%",
  },
  title: {
    fontWeight: "300",
    fontSize: 23,
  },
  search_container: {
    marginVertical: 15,
    width: "70%",
  },
  input_box: {
    width: "100%",
    padding: 5,
    borderWidth: 0.8,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#5B93CB",
    padding: 12,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
});
