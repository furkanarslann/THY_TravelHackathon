import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";
 

const Home = () => {
  const cards = [
    {
      header: "Uçuş Sorgulama",
      imageLocation: require("../assets/images/searching_flights.png"),
      destination: "Flights",
    },
    {
      header: "Bagaj Takibi",
      imageLocation: require("../assets/images/bagajtakibi.png"),
      destination: "Bag Track",
    },
    {
      header: "Kayıp Bagaj Bilgisi",
      imageLocation: require("../assets/images/kayıpbagaj.png"),
      destination: "Lost Bag",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{borderBottomWidth:.3,width:"100%",justifyContent:"center",alignItems:"center",paddingVertical:5}}>
      <Image
              source={require("../assets/images/thy.png")}
              style={{ width: 50, height: 50 }}
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
   justifyContent:"center",
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
