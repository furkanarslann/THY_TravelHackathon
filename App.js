import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";

function Feed() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
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
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
