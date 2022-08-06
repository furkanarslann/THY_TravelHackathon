import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./LostBagCard.style";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const LostBagCard = ({ bag }) => {
  const lostBaggageFile = useSelector((state) => state.lostBag.lostBaggageFile);

  const creationDate = lostBaggageFile.fileInformation.creationDate;
  const fileReferenceNumber =
    lostBaggageFile.fileInformation.fileReferenceNumber;

  function transformDate(x) {
    const day = x.slice(0, 2);
    const month = x.slice(2, 5);
    const year = Number(x.slice(5, 7)) + 2000;
    const hour = x.slice(8, 10) + "." + x.slice(10, 12) + " GMT";

    return day + " " + month + " " + year + " at " + hour;
  }
  const dateTransformed = transformDate(creationDate);

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={{ fontWeight: "300" }}>{dateTransformed}</Text>
        <Text style={{ fontWeight: "400" }}>
          Reference:{" "}
          <Text style={{ fontWeight: "300" }}>{fileReferenceNumber}</Text>
        </Text>
      </View>
      <View style={styles.mid_container}>
        <Image
          style={styles.left}
          source={require("../../assets/images/baggage.png")}
        />
        <View style={styles.right}>
          <Text style={{ fontWeight: "400" }}>
            Tag Number:{" "}
            <Text style={{ fontWeight: "300" }}>{bag.tagNumber}</Text>
          </Text>
          <Text style={{ fontWeight: "400" }}>
            Brand: <Text style={{ fontWeight: "300" }}>{bag.brand}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.status_text}>
          <Ionicons name="warning" size={18} color="yellow" /> {bag.status}
        </Text>
      </View>
    </View>
  );
};

export default LostBagCard;
