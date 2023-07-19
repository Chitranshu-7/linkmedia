import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Hello() {
  return (
    <View>
      <Text>Hello</Text>
      <Text style={style.name}>To do list</Text>
    </View>
  )
}

const style= StyleSheet.create({
    name:{
        fontSize:24,
        color:"cyan",
    }
})