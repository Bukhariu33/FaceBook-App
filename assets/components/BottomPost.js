import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';

//we are good to go
// <AntDesign name="like2" size={25} color="black" />
// we'll do it later for another component


export default function BottomPost({name, text}) {

  return (
    <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name={name} size={25} color="black" />
          <Text style={styles.iconText}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          <EvilIcons name={name} size={25} color="black" />
          <Text style={styles.iconText}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name={name} size={24} color="black" />
          <Text style={styles.iconText}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name={name} size={24} color="black" />
          <Text style={styles.iconText}>{text}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    bottomContainer: {
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconText: {
        fontSize: 15,
        marginLeft: 5,
      },
})