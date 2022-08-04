import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    marginTop: 5,
    padding: 15,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 60,
    marginTop:Dimensions.get('window').height/31,
  },
});

export default styles;
