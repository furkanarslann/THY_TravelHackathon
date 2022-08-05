import React, { useState } from "react";
import { Text, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

const Calender = ({
  selectedDate,
  setSelectedDate,
  changeDateModalVisibility,
}) => {
   const onDateChanged = (newDate) => {
    const date = getFormatedDate(newDate, "YYYY/MM/DD").toString();

    setSelectedDate(date);
    changeDateModalVisibility(false);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 32,
          color: "#64748b",
        }}
      >
        Select Date
      </Text>
      <DatePicker
        mode="calendar"
        options={{
          mainColor: "red",
        }}
        current="2022-08-13"
        minimumDate={getToday()}
        onSelectedChange={(date) => onDateChanged(date)}
      />
    </View>
  );
};
export default Calender;
