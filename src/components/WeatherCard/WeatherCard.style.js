import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 5.5,
    backgroundColor: "#7CADD8FA",
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    padding: 5,
  },
  left: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  left_top: {},
  left_bottom: {},
  right: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    color: "white",
    fontSize: 23,
    fontWeight:'300'
  },
  date: {
    marginTop: 5,
    color: "white",
    fontWeight:'21'
  },
  degree: {
    color: "white",
    fontSize: 40,
  
  },
});
export default styles;
