import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import axios from "axios";
import { getAirports } from "./src/redux/api/airport";
import Routes from "./Router";
import { getBags } from "./src/redux/api/bag";

export default function ReactApp() {
 
    return (
      <Provider store={store}>
       <Routes/>
      </Provider>
    );
  }
  