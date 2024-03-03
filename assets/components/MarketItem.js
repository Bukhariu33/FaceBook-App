import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function MarketItem({src, priceOne, priceTwo}) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Today's Pick</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="location" size={24} color="black" />
          <Text style={{ marginRight: 10, color: 'blue' }}>Choose location</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image source={src} style={styles.image} />
        <Image source={src} style={styles.image} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
        <Text>{priceOne}</Text>
        <Text>{priceTwo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: screenWidth/2,
    height: 200,
    margin: 5,
  },
});
