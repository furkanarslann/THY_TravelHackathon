import { View, Text, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import AirportCard from '../AirportCard/AirportCard'
const AirportList = () => {
    const airports=useSelector((state)=>state.airport.airports)
/* useEffect(() => {
  airports.forEach((item)=>{
    console.log(item.City.LanguageInfo.Language[0].Name);
  })
}, []) */
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