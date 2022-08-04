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
/* function Feed() {
  const dispatch = useDispatch();

  return <Flights />;
}

function Article() {
  return (
    <View>
      <AirportList />
    </View>
  );
} */

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Flights"
      screenOptions={{
        headerTintColor: 'black',
        drawerStyle: { backgroundColor: "#5F0505F3" },
        drawerActiveBackgroundColor: "#B71E06",
        drawerInactiveBackgroundColor: "#AFAFAF",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={FlightsPage} // degiscek
        options={{
          headerTitleStyle: { color: "#EA2D10" },
          drawerLabel: "Anasayfa",
          drawerActiveTintColor: "white",
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
          headerTitleStyle: { color: "#EA2D10" },
          drawerLabel: "Uçuş bul",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "airplane" : "airplane-outline"}
              size={22}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
