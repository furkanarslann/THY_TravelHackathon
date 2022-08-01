import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

const AirportList = () => {
    const airports=useSelector((state)=>state.airport.airports)
  return (
    <FlatList 
    
    data={airports}
    renderItem={({ item }) => (
     <Text>{console.log(item)}</Text>
    )}
  />
  )
}

export default AirportList