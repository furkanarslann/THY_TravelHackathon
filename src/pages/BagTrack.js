import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { batch, useDispatch, useSelector } from "react-redux";
import { getBags, getLostBaggage } from "../redux/api/bag";
import { useNavigation } from "@react-navigation/native";

const BagTrack = () => {
  const navigation = useNavigation();

  const bag = useSelector((state) => state.bag.bag);

  const loadingState = useSelector((state) => state.bag.loadingState);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onPress = () => {
    dispatch(getBags(search));
  };

  useEffect(() => {
    bag?.length!=0&&bag && navigation.navigate("Bag Details");
  }, [bag]);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "30%",
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Bag Tracker</Text>
        <View style={styles.imageCard}>
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              flex: 1,
              resizeMode: "contain",
              borderRadius: 30,
            }}
            source={require("../assets/images/bag-track.png")}
          />
        </View>
      </View>
      <View style={{ width: "75%", alignItems: "center" }}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => onPress()}
          style={search == "" ? styles.buttonDisabled : styles.button}
          disabled={search == ""}
        >
          {loadingState == "loading" ? (
            <ActivityIndicator color="white" style={{}} />
          ) : (
            <Text style={styles.buttonText}>Search</Text>
          )}
        </TouchableOpacity>

        {!bag ? (
          <View>
            <Text>Search Baggage</Text>
            <Text>Search</Text>
          </View>
        ) :  (
          <View>
            <Text>No Baggages Found</Text>
            <Text>Contact Us</Text>
          </View>
        )}
        {/*  {bag&& <View style={{}}>
              <Text>Search for Baggages</Text>
              <Text>Click for details</Text>
            </View>} */}
      </View>
      <Button
        title="pres"
        onPress={() => dispatch(getLostBaggage("TK111222"))}
      ></Button>
    </View>
  );
};

export default BagTrack;
const styles = StyleSheet.create({
  imageCard: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fafafa",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "red",
    padding: 15,
  },
  buttonDisabled: {
    borderRadius: 10,

    backgroundColor: "grey",
    padding: 15,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#ffffff",
  },
});
