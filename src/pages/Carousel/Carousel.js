import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../../components/CarouselCard/Card";
import Pagination from "../../components/PaginationDots/Pagination";

const Carousel = () => {
  
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const width = Dimensions.get("window").width;
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          header="selam dünya"
          paragraph="ben massaka"
          imageLocation={require("../../assets/images/aircraft.png")}
        />
        <Card
          header="selam dünya"
          paragraph="ben massaka"
          imageLocation={require("../../assets/images/aircraft.png")}
        />
        <Card
          header="selam dünya"
          paragraph="ben massaka"
          imageLocation={require("../../assets/images/aircraft.png")}
        />
        <Card
          header="selam dünya"
          paragraph="ben massaka"
          imageLocation={require("../../assets/images/aircraft.png")}
        />
        <Card
          header="selam dünya"
          paragraph="ben massaka"
          imageLocation={require("../../assets/images/aircraft.png")}
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        opacity={0.5}
        onPress={() => console.log("Next page")}
      >
        <Text style={{ textAlign: "center" }}>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={55}
            color="#6CC2F4E1"
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
    paddingBottom: 20,
  },
});

export default Carousel;
