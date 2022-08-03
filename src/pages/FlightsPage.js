import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flights from '../components/Flights/Flights';
import AirportList from '../components/AirportList/AirportList';
import { getAirports } from '../redux/api/airport';
import Search from '../components/Search';
import Calender from '../components/DatePicker/Calendar';
import { setTags } from '../redux/slices/airportSlice';

const FlightsPage = () => {
  const dispatch=useDispatch();
  

  const airports=useSelector((state)=>state.airport.airports)
 
  useEffect(() => {
    dispatch(getAirports())
    
      const arr = airports.map((item) => {
        return item.City.LanguageInfo!==""
          ? {code:item.Code,city:(Array.isArray(item.City.LanguageInfo.Language)?item.City.LanguageInfo.Language[0].Name:(item.City.LanguageInfo.Language.Name))}
          : {code:item.City.PortsInCity.Port.Code,city:item.LanguageInfo.Language };
      });
      dispatch(setTags(arr)); 
  console.log(airports);
      console.log(arr);
    }, []);
 
 
  return (
    <SafeAreaView style={{height:"100%"}}>

    <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: "#b91c1c",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold" }}>
          Uçuş Bul
        </Text>
      </View>
      <Search/>
     
      </SafeAreaView>
      
  )
}

export default FlightsPage