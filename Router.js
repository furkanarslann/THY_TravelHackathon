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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import Carousel from "./src/pages/Carousel";
import { createStackNavigator } from "@react-navigation/stack";
import FlightsPage from "./src/pages/FlightsPage";
import THY_Drawer from "./src/components/DrawerNavigation/Drawer";
import FlightDetails from "./src/components/FlightDetails/FlightDetails";
import Details from "./src/pages/Details";
import { getBags } from "./src/redux/api/bag";
import BagTrack from "./src/pages/BagTrack";
import BagDetails from "./src/pages/BagDetails";
import LostBag from "./src/pages/LostBag";
import Home from "./src/pages/Home";
import CustomDrawer from "./src/components/CustomDrawer/CustomDrawer";

const App = () => {
  axios.defaults.headers.common = {
    apikey: "l7xxf90f2f436d3b48bba2a0d0ef5aec7008",
    apisecret: "885c340e96ac4c7a9638c021ccbe8a01",
  };
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.airport.tags);

  React.useEffect(() => {
    dispatch(getAirports());
  }, []);

  return <THY_Drawer />;
};
export default App;

const styles = StyleSheet.create({});
