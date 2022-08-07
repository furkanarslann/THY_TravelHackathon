import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#0f172a",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
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
    color: "#cbd5e1",
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 5,
  },
  date: {
    color: "#cbd5e1",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 5,
  },
  degree: {
    color: "#cbd5e1",
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 5,
  },
});
export default styles;
