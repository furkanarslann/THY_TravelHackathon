import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeCard
          header="Uçuş Sorgulama"
          imageLocation={require("../assets/images/searching_flights.png")}
          destination={"flights"}
        />
        
        <HomeCard
        header="Bagaj Takibi"
        destination={"Bag Track"}
        imageLocation={require("../assets/images/bagajtakibi.png")}
      />
      
      <HomeCard
      header="Kayıp Bagaj Bilgisi"
      destination={"Bag Details"}
      imageLocation={require("../assets/images/kayıpbagaj.png")}
    />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
  },


  imageStyle: {
    height: "20%",
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
