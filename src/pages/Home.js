import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import { useDispatch } from "react-redux";
import { toggleDrawerState } from "../redux/slices/drawerTriggerSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerState());
  }, []);
  const cards = [
    {
      header: "Search Flights",
      imageLocation: require("../assets/images/searching_flights.png"),
      destination: "Flights",
    },
    {
      header: "Track your baggages",
      imageLocation: require("../assets/images/bagajtakibi.png"),
      destination: "Bag Track",
    },
    {
      header: "Lost Baggage Service",
      imageLocation: require("../assets/images/kayipbagaj.png"),
      destination: "Lost Bag",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F7F5F5",
          paddingVertical: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.2,

          elevation: 5,
        }}
      >
        <Image
          source={require("../assets/images/thy.png")}
          style={{ width: 50, height: 50, padding: 5 }}
        />
      </View>
      {cards.map((card) => (
        <HomeCard
          header={card.header}
          imageLocation={card.imageLocation}
          destination={card.destination}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  imageStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 230,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#6CC2F4E1",
    marginLeft: 10,
  },
});

export default Home;
