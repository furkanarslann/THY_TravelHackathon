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
import { MaterialIcons } from "@expo/vector-icons";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import Home from "../../pages/Home";
import FlightDetails from "../FlightDetails/FlightDetails";
import BagTrack from "../../pages/BagTrack";
import BagDetails from "../../pages/BagDetails";
import LostBag from "../../pages/LostBag";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Details from "../../pages/Details";

const Drawer = createDrawerNavigator();

function THY_Drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          drawerItemStyle: { marginVertical: 8, padding: 3 },
          headerTintColor: "black",
          drawerStyle: { backgroundColor: "#5F0505F3" },
          drawerActiveBackgroundColor: "#B71E06",
          drawerInactiveBackgroundColor: "#AFAFAF",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "black",
          headerTitleStyle: { color: "#EA2D10", alignSelf: "center" },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerLabel: "Anasayfa",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={22}
                color={focused ? "#ffffff" : "#000000"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Flights"
          component={FlightsPage}
          options={{
            drawerStatusBarAnimation: "slide",
            drawerLabel: "Search Flights",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "airplane" : "airplane-outline"}
                size={22}
                color={focused ? "white" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Bag Track"
          component={BagTrack}
          options={{
            drawerStatusBarAnimation: "slide",
            drawerLabel: "Track Your Baggage",
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name={focused ? "bag-suitcase" : "bag-suitcase-outline"}
                size={22}
                color={focused ? "white" : "black"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Lost Bag"
          component={LostBag}
          options={{
            headerTitleStyle: { color: "#EA7610" },
            drawerStatusBarAnimation: "slide",
            drawerLabel: "Lost Baggages",
            drawerIcon: ({ focused, size }) => (
              <>
                <MaterialCommunityIcons
                  name={focused ? "bag-suitcase" : "bag-suitcase-outline"}
                  size={20}
                  color={focused ? "white" : "black"}
                />
                <MaterialCommunityIcons
                  name={focused ? "head-question" : "head-question-outline"}
                  style={{ height: 20, marginRight: -11 }}
                  size={16}
                  color={focused ? "white" : "black"}
                />
              </>
            ),
          }}
        />
        <Drawer.Screen
          name="Details"
          component={Details}
          options={{
            drawerItemStyle: { height: 0 },
            drawerStatusBarAnimation: "slide",
            drawerLabel: "Details",
            drawerIcon: ({ focused, size }) => (
              <>
                <MaterialCommunityIcons
                  name={focused ? "bag-suitcase" : "bag-suitcase-outline"}
                  size={20}
                  color={focused ? "white" : "black"}
                />
                <MaterialCommunityIcons
                  name={focused ? "head-question" : "head-question-outline"}
                  style={{ height: 20, marginRight: -11 }}
                  size={16}
                  color={focused ? "white" : "black"}
                />
              </>
            ),
          }}
        />
        <Drawer.Screen
          name="Bag Details"
          component={BagDetails}
          options={{
            drawerItemStyle: { height: 0 },
            drawerStatusBarAnimation: "slide",
            drawerLabel: "Bag Details",
            drawerIcon: ({ focused, size }) => (
              <>
                <MaterialCommunityIcons
                  name={focused ? "bag-suitcase" : "bag-suitcase-outline"}
                  size={20}
                  color={focused ? "white" : "black"}
                />
                <MaterialCommunityIcons
                  name={focused ? "head-question" : "head-question-outline"}
                  style={{ height: 20, marginRight: -11 }}
                  size={16}
                  color={focused ? "white" : "black"}
                />
              </>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default THY_Drawer;
