import { View, Text } from 'react-native'
import React from 'react'

const BagStatus = ({item}) => {
  return (
    <View>
      <Text>{item.bagStatus}</Text>
    </View>
  )
}

export default BagStatus