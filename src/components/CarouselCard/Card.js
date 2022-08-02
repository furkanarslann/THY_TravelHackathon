import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import styles from "./Card.style";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default Card = ({ imageLocation, header, paragraph }) => (
  <View style={{ width, height, marginTop: 150 }}>
    <Image source={imageLocation} style={styles.imageStyle} />
    <View style={styles.wrapper}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>
    </View>
  </View>
);
