import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { batch, useDispatch, useSelector } from "react-redux";
import { getBags, getLostBaggage } from "../redux/api/bag";
import { useNavigation } from "@react-navigation/native";

const BagTrack = () => {
  const navigation = useNavigation();

  const bag = useSelector((state) => state.bag.bag);
  console.log(bag);
  const loadingState = useSelector((state) => state.bag.loadingState);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onPress = () => {
    dispatch(getBags(search));
  };

  useEffect(() => {
    bag?.length != 0 && bag && navigation.navigate("Bag Details");
  }, [bag]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "30%",

          resizeMode: "contain",
          borderRadius: 30,
        }}
        source={require("../assets/images/bag-track.png")}
      />

      <Text style={styles.title}>Bag Tracker</Text>

      <View style={{ width: "75%", alignItems: "center" }}>

      <Text style={{paddingVertical:10,alignSelf:"flex-start",fontSize:16}}>Tag number</Text>
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

        {!bag && (
          <View
            style={{
              backgroundColor: "#FA9CA2",
              padding: 10,
              paddingHorizontal: 15,
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#721C23", textAlign: "center" }}>
              Cannot find your baggage. Please contact us.
            </Text>
          </View>
        )}
        {/*  {bag&& <View style={{}}>
              <Text>Search for Baggages</Text>
              <Text>Click for details</Text>
            </View>} */}
      </View>
    </SafeAreaView>
  );
};

export default BagTrack;
const styles = StyleSheet.create({
  imageCard: {
    width: "100%",
    height: "30%",
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
    marginBottom:12,
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
