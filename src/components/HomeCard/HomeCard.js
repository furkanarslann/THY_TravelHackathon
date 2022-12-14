import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomeCard.style";
import { useNavigation } from "@react-navigation/native";

const HomeCard = ({ imageLocation, header, destination }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      elevation={5}
      style={styles.container}
      onPress={() => navigation.navigate(destination)}
    >
      <Image source={imageLocation} style={styles.imageStyle} />

      <View style={styles.bottomcontainer}>
        <Text style={styles.header}>{header}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
