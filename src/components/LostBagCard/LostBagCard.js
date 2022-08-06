import { View, Text } from "react-native";
import React from "react";
import styles from "./LostBagCard.style";
import { useSelector } from "react-redux";

const LostBagCard = ({ bag }) => {
  const lostBaggageFile = useSelector((state) => state.lostBag.lostBaggageFile);

  const creationDate = lostBaggageFile.fileInformation.creationDate;
  const fileReferenceNumber =
    lostBaggageFile.fileInformation.fileReferenceNumber;


  return (
    <View style={styles.container}>
      <Text>{creationDate}</Text>
      <Text>{fileReferenceNumber}</Text>
      <Text>{bag.tagNumber}</Text>
      <Text>{bag.brand}</Text>
      <Text>{bag.status}</Text>
    </View>
  );
};

export default LostBagCard;
