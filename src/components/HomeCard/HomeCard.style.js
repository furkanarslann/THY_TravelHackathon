import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 4,
    marginVertical: 15,
    backgroundColor: "#f0eded",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    justifyContent: "center",
  },

  bottomcontainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    height: "80%",
    width: "100%",

    borderRadius: 2,
  },

  header: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
