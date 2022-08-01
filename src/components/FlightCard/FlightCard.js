import { View, Text } from 'react-native'
import React from 'react'
import styles from "./FlightCard.style"
const FlightCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.aircraftMaintype}</Text>
    </View>
  )
}

export default FlightCard