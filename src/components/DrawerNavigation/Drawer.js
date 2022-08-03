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
  Button
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
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Feed}
          options={{
            headerTitleStyle: { color: "red" },
            drawerActiveTintColor: "red",
            drawerLabel: "Anasayfa",
          }}
        />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
      <Button title="Press"></Button>
    </>
  );
}

export default DrawerNav;
