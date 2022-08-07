import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../components/CarouselCard/Card";
import Pagination from "../components/PaginationDots/Pagination";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const width = Dimensions.get("window").width;
  console.log(sliderState.currentPage);
  const navigation = useNavigation();

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  console.log(pageIndex);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "70%",
        }}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      >
        <Card
          header="Welcome to the privileged world of Turkish Airlines users"
          paragraph="We offer you the best user experience in our application! Swipe to explore our splendid features."
          imageLocation={require("../assets/images/welcoming.png")}
        />
        <Card
          header="Flights and Weather Reports"
          paragraph="Easily reach the available flights and latest weather reports at your destination location for the best travelling experience!"
          imageLocation={require("../assets/images/flight-weather.png")}
        />
        <Card
          header="Bag Track"
          paragraph="Instant status of your baggage is now one tap away from you. Reach the latest information of your baggage with Bag Track feature."
          imageLocation={require("../assets/images/bag-track.png")}
        />
        <Card
          header="Lost Baggage"
          paragraph="Have you lost your baggage? No worries, THY Lost Baggage System is ready for your service. Enter your tag number and search your baggage status."
          imageLocation={require("../assets/images/lost-bagg.png")}
        />
      </ScrollView>

      <Text style={{ textAlign: "center", fontSize: 17 }}>
        Press to go to home page
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
        opacity={0.5}
        disabled={pageIndex === 3 ? false : true}
      >
        <Text style={{ textAlign: "center" }}>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={55}
            color={pageIndex === 3 ? "red" : "grey"}
          />
        </Text>
      </TouchableOpacity>
      <Pagination pageIndex={pageIndex} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
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
  button: {
    paddingBottom: 50,
  },
});

export default Carousel;
