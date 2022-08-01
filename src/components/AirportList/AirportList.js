import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import AirportCard from '../AirportCard/AirportCard'
const AirportList = () => {
    const airports=useSelector((state)=>state.airport.airports)
  return (
    <FlatList 
    style={{flexDirection:"column",width:"100%"}}
     
    data={airports}
    renderItem={({ item }) => (
     <AirportCard item={"item"}/>
    )}
  />
  )
}

export default AirportList