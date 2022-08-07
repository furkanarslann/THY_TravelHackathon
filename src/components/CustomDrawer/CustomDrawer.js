import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import styles from "./CustomDrawer.style";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logowhite.png")}
          style={styles.logo}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0, margin: 5 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
