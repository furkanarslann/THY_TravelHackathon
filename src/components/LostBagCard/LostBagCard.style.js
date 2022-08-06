import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    padding: 7,
    width: "90%",
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#EDEDED",
    justifyContent: "space-between",
    elevation: 7,
  },
  top_container: {
    height: "20%",
  },
  mid_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom_container: {
    padding: 5,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  left: {
    width: 130,
    height: 120,
  },
  right: {
    justifyContent: "center",
    marginBottom: 55,
  },
  status_text: {
    fontSize: 15,
    color: "yellow",
    fontWeight: "bold",
  },
});

export default styles;
