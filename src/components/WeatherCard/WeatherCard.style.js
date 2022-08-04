import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 5.5,
    backgroundColor: "grey",
    borderRadius: 8,
    alignSelf:'center',
  },
});
export default styles;
