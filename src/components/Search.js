import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalPicker from "./ModalPicker/ModalPicker";
import ToModalPicker from "./ModalPicker/ToModalPicker";
import Calender from "./DatePicker/Calendar";
import { useDispatch } from "react-redux";
import { getFlightsByDate } from "../redux/api/flight";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
const Search = () => {
  const [where, setWhere] = useState("SELECT");
  const [to, setTo] = useState("SELECT");
  const [toCity, setToCity] = useState("SELECT");
  const [city, setCity] = useState("SELECT");

  const [isVisible, setIsVisible] = useState(false);
  const [toIsVisible, setToIsVisible] = useState(false);
  const [dateIsVisible, setDateIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();

  const changeModalVisibility = (bool) => {
    setIsVisible(bool);
  };
  const changeModalVisibilityTo = (bool) => {
    setToIsVisible(bool);
  };
  const changeDateModalVisibility = (bool) => {
    setDateIsVisible(bool);
  };

  console.log(where);
  return (
    <View style={{ height: "100%", backgroundColor: "#FFFFFF" }}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setWhere={setWhere}
          setCity={setCity}
        />
      </Modal>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            position: "absolute",
            left: 4,
            top: 4,
            fontSize: 20,
            fontWeight: "600",
            color: "#64748b",
          }}
        >
          FROM
        </Text>

        <Text
          style={{
            position: "absolute",
            left: 4,
            bottom: 4,
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          {city}
        </Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => changeModalVisibility(true)}
        >
          <Text style={styles.text}>{where}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            { borderLeftWidth: 2, borderColor: "#cbd5e1" },
          ]}
          onPress={() => {
            changeModalVisibilityTo(true);
            console.log("to");
          }}
        >
          <Text style={styles.text}>{to}</Text>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            right: 4,
            top: 4,
            fontSize: 20,
            fontWeight: "600",
            color: "#64748b",
          }}
        >
          TO
        </Text>

        <Text
          style={{
            position: "absolute",
            width: "50%",
            textAlign: "right",
            right: 6,
            bottom: 6,
            fontSize: 16,
            fontWeight: "300",
          }}
        >
          {toCity}
        </Text>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={toIsVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ToModalPicker
          changeModalVisibilityTo={changeModalVisibilityTo}
          setTo={setTo}
          setToCity={setToCity}
        />
      </Modal>
      <TouchableOpacity
        onPress={() => {
          changeDateModalVisibility(true);
          console.log("to");
        }}
      >
      
        <Text
          style={{ textAlign: "center" }}
          onPress={() => navigation.navigate("flights")}
        >
          <AntDesign name="calendar" size={24} color="black" />
        </Text>
  
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={dateIsVisible}
        onRequestClose={() => changeDateModalVisibility(false)}
      >
        <Calender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          changeDateModalVisibility={changeDateModalVisibility}
        />
      </Modal>
      <Button
        onPress={() =>
          dispatch(
            getFlightsByDate({
              date: selectedDate,
              scheduledDepartureAirport: where,
              scheduledArrivalAirport: to,
            })
          )
        }
        title="asd"
      ></Button>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  touchableOpacity: {
    width: "100%",

    backgroundColor: "white",

    paddingHorizontal: 20,
  },
  text: { marginVertical: 20, fontSize: 24, fontWeight: "bold" },
});
