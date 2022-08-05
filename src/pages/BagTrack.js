import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getBags } from "../redux/api/bag";
import { setSearchedBag } from "../redux/slices/bagSlice";
import { useNavigation } from "@react-navigation/native";

const BagTrack = () => {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();
 
  const bag = useSelector((state) => state.bag.bag);

  const loadingState = useSelector((state) => state.bag.loadingState);
  console.log(loadingState);
   
  console.log(bag);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search);

  const onPress = async() => {
     dispatch(getBags(search));
   
    
  
     
    };
  

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
          onPress={()=>onPress()}
          style={search == "" ? styles.buttonDisabled : styles.button}
          disabled={search == ""}
        >
         
          {loadingState == "loading" ? (
            <ActivityIndicator color="white" style={{}} />
          ) : (
            <Text style={styles.buttonText}>Search</Text>
          )}
        </TouchableOpacity>
        
        {!bag?<View>
        <Text>Search Baggage</Text>
        <Text>Search</Text>
      </View>:bag.length>0 ? (
          <TouchableOpacity style={{justifyContent:"center",alignItems:"center",padding:20,marginTop:10,backgroundColor:"#f1f5f9",}} onPress={() => navigation.navigate("bagDetails")}>
              <Text>Your baggage is found</Text>
        <Text>Click for details</Text>
          </TouchableOpacity>
        ): <View>
        <Text>No Baggages Found</Text>
        <Text>Contact Us</Text>
      </View>}
     {/*  {bag&& <View style={{}}>
              <Text>Search for Baggages</Text>
              <Text>Click for details</Text>
            </View>} */}
      </View>
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
