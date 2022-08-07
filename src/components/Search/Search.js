import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalPicker from "../ModalPicker/ModalPicker";
import ToModalPicker from "../ModalPicker/ToModalPicker";
import Calender from "../DatePicker/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getFlightsByDate } from "../../redux/api/flight";
import { AntDesign } from "@expo/vector-icons";
const Search = () => {
  const [where, setWhere] = useState("SELECT");
  const [to, setTo] = useState("SELECT");
  const [toCity, setToCity] = useState("");
  const [city, setCity] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [toIsVisible, setToIsVisible] = useState(false);
  const [dateIsVisible, setDateIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const loadingState = useSelector((state) => state.flight.loadingState);
  const dispatch = useDispatch();
  const dateConvert = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return year + month + day;
  };

  dateConvert(selectedDate);

  const changeModalVisibility = (bool) => {
    setIsVisible(bool);
  };
  const changeModalVisibilityTo = (bool) => {
    setToIsVisible(bool);
  };
  const changeDateModalVisibility = (bool) => {
    setDateIsVisible(bool);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderBottomColor: "black",
          borderBottomWidth: 0.3,
          paddingBottom: 10,
        }}
      >
        <Modal
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

        <View style={styles.selectContainer}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "#ffffff",
              }}
            >
              FROM
            </Text>

            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => changeModalVisibility(true)}
            >
              <Text style={styles.text}>{where}</Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
                color: "#f1f5f9",
              }}
            >
              {city.toLocaleUpperCase()}
            </Text>
          </View>
          <AntDesign name="swapright" size={48} color="#cbd5e1" />
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "#ffffff",
              }}
            >
              TO
            </Text>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                changeModalVisibilityTo(true);
              }}
            >
              <Text style={styles.text}>{to}</Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
                color: "#ffffff",
              }}
            >
              {toCity.toLocaleUpperCase()}
            </Text>
          </View>
        </View>

        <Modal
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
        <View>
          <TouchableOpacity
            onPress={() => {
              changeDateModalVisibility(true);
            }}
            style={{
              paddingVertical: 20,
              paddingHorizontal: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 24,
                  color: "#64748b",
                  marginBottom: 15,
                }}
              >
                DEPARTURE DATE
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {selectedDate != "" ? (
                  <Text
                    style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "black",
                      marginRight: 10,
                    }}
                  >
                    {new Date(selectedDate).getDate()}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "300",
                      color: "#64748b",
                    }}
                  >
                    SELECT
                  </Text>
                )}

                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#64748b",
                      marginRight: 8,
                    }}
                  >
                    {selectedDate != ""
                      ? new Date(selectedDate).toDateString().slice(4, 7)
                      : ""}
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#64748b",
                    }}
                  >
                    {selectedDate != ""
                      ? new Date(selectedDate).getFullYear()
                      : ""}
                  </Text>
                </View>
              </View>
              <Text style={{}}>
                {/*             <AntDesign name="calendar" size={24} color="black" />
                 */}{" "}
              </Text>
            </View>
            <AntDesign name="calendar" size={64} color="black" />
          </TouchableOpacity>
        </View>
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
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginVertical: 20,
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: "#EA2E12E1",
          borderRadius: 10,
        }}
        onPress={() =>
          dispatch(
            getFlightsByDate({
              date: dateConvert(selectedDate),
              scheduledDepartureAirport: where,
              scheduledArrivalAirport: to,
            })
          )
        }
      >
        {loadingState == "loading" ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "400",
            }}
          >
            Search
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.3,
    backgroundColor: "#1e293b",
  },
  touchableOpacity: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  text: { fontSize: 24, fontWeight: "bold", color: "#ffffff" },
});
