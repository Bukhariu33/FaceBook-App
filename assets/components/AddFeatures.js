import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function AddFeatures({name, label, color, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
         <View style={{flexDirection:'row', borderBottomWidth:1, padding:10, alignItems:'center'}}>
          <Ionicons name={name} size={30} color={color} style={{marginHorizontal:10}}/>
          <Text>{label}</Text>
        </View>

    </TouchableOpacity>
       
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:"black",
    }
})