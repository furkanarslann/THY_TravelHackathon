import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "./HomeCard.style";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");




const HomeCard = ({ imageLocation, header, paragraph, destination }) => {

  const navigation=useNavigation();
  return (
    
    <TouchableOpacity  elevation={5} style={styles.container} onPress={()=>navigation.navigate(destination)} >
    <Image source={imageLocation} style={styles.imageStyle} />
  
  <View style={styles.bottomcontainer} >
      <Text style={styles.header}>{header}</Text>

      </View>

    </TouchableOpacity>
    
  );
};

export default HomeCard;