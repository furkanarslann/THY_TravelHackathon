import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  PixelRatio,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import axios from "axios";
import { getAirports } from "./src/redux/api/airport";
import AirportList from "./src/components/AirportList/AirportList";
import Flights from "./src/components/Flights/Flights";
import { getFlightsByDate } from "./src/redux/api/flight";
import { useState } from "react";

function Feed() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFlightsByDate());
  }, []);
  return <Flights />;
}

function Article() {
  return (
    <View>
      <AirportList />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed. ama bunu title ile override edebiliyoruz, ki ettik."
        component={Feed}
        options={{
          headerTitle: "Home",
          headerTitleStyle: { color: "red" },
          drawerActiveTintColor: "red",
          drawerLabel: "Anasayfa",
        }}
      />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

/* export default function App() {
  
  const dispatch = useDispatch();
  const airports = useSelector((state) => state.airport.airports);
  const loading = useSelector((state) => state.airport.loadingState);
  console.log(loading);
  const ct = useSelector((state) => state.counter.value);
  console.log(ct);
  
 
  axios.defaults.headers.common = {
    apikey: "l7xxf90f2f436d3b48bba2a0d0ef5aec7008",
    apisecret: "885c340e96ac4c7a9638c021ccbe8a01",
  };
  React.useEffect(() => {
    dispatch(getAirports());
  

  }, []);
  return (
    <NavigationContainer>
      <MyDrawer />

      <Button title="Press"></Button>
    </NavigationContainer>
  );
} */

const App = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { height } = Dimensions.get("window");
  const { width } = Dimensions.get("window");

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
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
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
           <View style={{ width, height,marginTop:150 }}>
            <Image
              source={require("./src/assets/images/aircraft.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>
                ... for a fraction of the price
              </Text>
            </View>
          </View>
          <View style={{ width, height,marginTop:150 }}>
            <Image
              source={require("./src/assets/images/aircraft.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>
                ... for a fraction of the price
              </Text>
            </View>
          </View>
          <View style={{ width, height,marginTop:150 }}>
            <Image
              source={require("./src/assets/images/aircraft.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>
                ... for a fraction of the price
              </Text>
            </View>
          </View>
          <View style={{ width, height,marginTop:150 }}>
            <Image
              source={require("./src/assets/images/aircraft.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>
                ... for a fraction of the price
              </Text>
            </View>
          </View>
          <View style={{ width, height,marginTop:150 }}>
            <Image
              source={require("./src/assets/images/aircraft.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>
                ... for a fraction of the price
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: "20%",
    width: "100%",
justifyContent:"center",
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
    bottom: 200,
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
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

export default App;
