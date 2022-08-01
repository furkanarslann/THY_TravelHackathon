import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import AirportCard from '../AirportCard/AirportCard'
const AirportList = () => {
    const airports=useSelector((state)=>state.airport.airports)
  return (
 
    <FlatList
      numColumns={2}
      data={airports}
      renderItem={({ item, index }) => {
       return  <AirportCard item={item}/>
      }
      }
    />
 
   )
}

export default AirportList