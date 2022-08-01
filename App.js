import * as React from "react";
import { View, Text, Button } from "react-native";
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

function Feed() {
  const dispatch=useDispatch();
  React.useEffect(() => {
    dispatch(getFlightsByDate())
  }, [])
   return (
   <Flights/>
  );
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

export default function App() {
  
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
}
