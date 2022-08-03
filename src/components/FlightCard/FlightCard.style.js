const { StyleSheet, Dimensions } = require("react-native");

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 7,
    backgroundColor: "#FAFCFE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
  airports:{
    fontSize: 18,
    color: "#000",
    fontWeight:'500'
  },
  date:{
    fontSize: 14,
    color: "#000",
    
  },
  logo: {
    width: Dimensions.get("window").width / 7,
    height: Dimensions.get("window").height / 13.5,
  },
});
export default styles;
