import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#C376F3",
    alignItems: "center",
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: "#FFFFFF",
    paddingHorizontal: 10,
  },
});
