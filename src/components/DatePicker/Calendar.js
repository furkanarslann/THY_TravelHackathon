import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

const Calender = ({ selectedDate, setSelectedDate }) => {
  console.log(selectedDate);
  const onDateChanged = (newDate) => {
    const date = getFormatedDate(newDate, "YYYY/MM/DD").toString();
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    setSelectedDate(year + month + day);
  };
  return (
    <DatePicker
      current="2022-08-13"
      minimumDate={getToday()}
      onSelectedChange={(date) => onDateChanged(date)}
    />
  );
};
export default Calender;
