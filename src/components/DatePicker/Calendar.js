import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';


const Calender = ({selectedDate,setSelectedDate}) => {
 
console.log(selectedDate);
const onDateChanged=(newDate)=>{
setSelectedDate(getFormatedDate(newDate,"YYYY/MM/DD").toString());
}
 return (
    <DatePicker
    current="2022-08-13"
    minimumDate={getToday()}
    
    onSelectedChange={date=>onDateChanged(date)}
  />
  );
};
export default Calender