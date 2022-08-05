import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 4,
    marginVertical: 15,
    backgroundColor: "grey",
    borderRadius: 10,
  },
});

export default styles;
