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
import { store } from "../../redux/store";
import axios from "axios";
import { getAirports } from "../../redux/api/airport";
import AirportList from "../AirportList/AirportList";
import Flights from "../Flights/Flights";
import { getFlightsByDate } from "../../redux/api/flight";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FlightsPage from "../../pages/FlightsPage";

function Feed() {
  const dispatch = useDispatch();

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

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Flights"
      screenOptions={{ drawerStyle: { backgroundColor: "#FEFEFE" } }}
    >
      <Drawer.Screen
        name="Flights"
        component={FlightsPage}
        options={{
          headerTitleStyle: { color: "red" },
          drawerActiveTintColor: "red",
          drawerLabel: "Uçuş Bul",
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
