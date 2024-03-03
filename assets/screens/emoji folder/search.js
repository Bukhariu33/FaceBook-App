import { View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export default function Search() {
  return (
    <View style={{flexDirection:'row', alignItems:"center"}}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput placeholder='Search' style={{marginLeft:10, padding:5}}/>
    </View>
  )
}