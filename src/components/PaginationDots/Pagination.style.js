import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  paginationWrapper: {
    position: "absolute",
    bottom: 230,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    marginLeft: 10,
    backgroundColor:"red",
  },
});

export default styles;
