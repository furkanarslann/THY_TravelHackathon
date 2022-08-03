import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import axios from "axios";
import { getAirports } from "./src/redux/api/airport";
import AirportList from "./src/components/AirportList/AirportList";
import Flights from "./src/components/Flights/Flights";
import { getFlightsByDate } from "./src/redux/api/flight";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "./src/pages/Carousel/Carousel";
import DrawerNav from "./src/components/DrawerNavigation/Drawer";
import { createStackNavigator } from "@react-navigation/stack";


const App = () => {
  axios.defaults.headers.common = {
    apikey: "l7xxf90f2f436d3b48bba2a0d0ef5aec7008",
    apisecret: "885c340e96ac4c7a9638c021ccbe8a01",
  };
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  const airports = useSelector((state) => state.airport.airports);

  

  React.useEffect(() => {
    dispatch(getAirports());
  }, []);
  console.log(airports);
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anasayfa" component={Carousel} 
        />
       
        <Stack.Screen name="flights" component={Flights} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};
export default App;

/*  const dispatch = useDispatch();
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
  }, []); */

const styles = StyleSheet.create({});
