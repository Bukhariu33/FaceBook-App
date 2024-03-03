import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Filter({name, text}) {
  return (
    <       View style={{backgroundColor:'lightblue', flexDirection:'row', width:'30%', padding:10, borderRadius:10, margin:5}}>
            <Ionicons name={name} size={20} color="black" style={styles.iconContainer}/>
            <Text>{text}</Text>
            <Ionicons name="caret-down-outline" size={20} color="black"/>
          </View>
  )
}


const styles = StyleSheet.create({

})
